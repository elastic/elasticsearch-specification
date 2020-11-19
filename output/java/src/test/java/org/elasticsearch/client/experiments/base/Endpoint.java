package org.elasticsearch.client.experiments.base;

import org.elasticsearch.common.xcontent.ContextParser;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.Map;
import java.util.function.Function;

/**
 * And endpoint links request and responses to protocol encoding. It also defines the error response
 * when the server cannot perform the request.
 *
 * @param <RequestT> the endpoint's request
 * @param <ResponseT> the endpoint's response. Use {@code Void} when there's no response body.
 * @param <ErrorT> the endpoint's error type. Use {@code Void} when error responses have no body.
 */
public interface Endpoint<RequestT, ResponseT, ErrorT> {
  /**
   * The endpoint's http method
   */
  String method(RequestT request);
  /**
   * Build the URL path for a request
   */
  String requestUrl(RequestT request);

  /**
   * Build the query parameters for a request
   */
  default Map<String, String> queryParameters(RequestT request) {
    return Collections.emptyMap();
  }

  /**
   * Build the headers for a request
   */
  default Map<String, String> headers(RequestT request) {
    return Collections.emptyMap();
  }

  /**
   * The entity parser for the response body. Can be {@code null} to indicate that there's no response body.
   */
  @Nullable
  ContextParser<FromXContent.Params, ResponseT> responseParser();

  // TODO: combine isError and errorParser in a single method with a tri-state result?
  boolean isError(int statusCode);

  /**
   * The entity parser for the error response body. Can be {@code null} to indicate that there's no error body.
   */
  @Nullable
  ContextParser<FromXContent.Params, ErrorT> errorParser(int statusCode);

  public static class Simple<RequestT, ResponseT> implements Endpoint<RequestT, ResponseT, ElasticsearchError> {

    private static final Function<?, Map<String, String>> EMPTY_MAP = x -> Collections.emptyMap();

    /**
     * Returns a function that always returns an empty String -> String map. Useful to avoid creating lots of
     * duplicate lambdas in endpoints that don't have headers or parameters.
     */
    @SuppressWarnings("unchecked")
    public static <T> Function<T, Map<String, String>> emptyMap() {
      return (Function<T, Map<String, String>>) EMPTY_MAP;
    }

    private final Function<RequestT, String> method;
    private final Function<RequestT, String> requestUrl;
    private final Function<RequestT, Map<String, String>> queryParameters;
    private final Function<RequestT, Map<String, String>> headers;
    private final ContextParser<FromXContent.Params, ResponseT> responseParser;

    public Simple(
      Function<RequestT, String> method,
      Function<RequestT, String> requestUrl,
      Function<RequestT, Map<String, String>> queryParameters,
      Function<RequestT, Map<String, String>> headers,
      ContextParser<FromXContent.Params, ResponseT> responseParser
    ) {
      this.method = method;
      this.requestUrl = requestUrl;
      this.queryParameters = queryParameters;
      this.headers = headers;
      this.responseParser = responseParser;
    }

    @Override
    public String method(RequestT request) {
      return this.method.apply(request);
    }

    @Override
    public String requestUrl(RequestT request) {
      return this.requestUrl.apply(request);
    }

    @Override
    public Map<String, String> queryParameters(RequestT request) {
      return this.queryParameters.apply(request);
    }

    @Override
    public Map<String, String> headers(RequestT request) {
      return this.headers.apply(request);
    }

    @Override
    public ContextParser<FromXContent.Params, ResponseT> responseParser() {
      return this.responseParser;
    }

    // ES-specific
    @Override
    public boolean isError(int statusCode) {
      return statusCode != 200;
    }

    @Override
    public ContextParser<FromXContent.Params, ElasticsearchError> errorParser(int statusCode) {
      return ElasticsearchError.PARSER;
    }
  }
}
