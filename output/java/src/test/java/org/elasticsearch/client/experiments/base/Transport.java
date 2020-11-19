package org.elasticsearch.client.experiments.base;

import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.NamedXContentRegistry;
import org.elasticsearch.common.xcontent.ToXContent;
import org.elasticsearch.common.xcontent.XContent;
import org.elasticsearch.common.xcontent.XContentBuilder;
import org.elasticsearch.common.xcontent.XContentParser;
import org.elasticsearch.common.xcontent.XContentType;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;

public class Transport {

  private final RestClient restClient;

  public Transport(RestClient restClient) {
    this.restClient = restClient;
  }

  public <RequestT, ResponseT, ErrorT> ResponseT performRequest(RequestT request, Endpoint<RequestT, ResponseT, ErrorT> endpoint) throws IOException {

    XContent xContent = XContentType.JSON.xContent();

    String method = endpoint.method(request);
    String path = endpoint.requestUrl(request);
    Map<String, String> params = endpoint.queryParameters(request);

    org.elasticsearch.client.Request clientReq = new org.elasticsearch.client.Request(method, path);
    clientReq.addParameters(params);

    if (request instanceof ToXContent) {
      // Request has a body
      ByteArrayOutputStream baos = new ByteArrayOutputStream();
      XContentBuilder builder = new XContentBuilder(xContent, baos);
      ((ToXContent) request).toXContent(builder, null);
      builder.close();

      clientReq.setEntity(new ByteArrayEntity(baos.toByteArray(), ContentType.APPLICATION_JSON));
    }

    // Send request
    org.elasticsearch.client.Response clientResp = restClient.performRequest(clientReq);

    int statusCode = clientResp.getStatusLine().getStatusCode();

    if (endpoint.isError(statusCode)) {
      // API error
      ErrorT error = null;
      ContextParser<FromXContent.Params, ErrorT> errorParser = endpoint.errorParser(statusCode);
      if (errorParser != null) {
        // Expecting a body
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        clientResp.getEntity().writeTo(baos);
        XContentParser parser = xContent.createParser(NamedXContentRegistry.EMPTY, null, baos.toByteArray());
        error = errorParser.parse(parser, null);
      }

      throw new ApiException(error);

    } else {
      // Successful response
      ResponseT response = null;
      ContextParser<FromXContent.Params, ResponseT> responseParser = endpoint.responseParser();
      if (responseParser != null) {
        // Expecting a body
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        clientResp.getEntity().writeTo(baos);
        XContentParser parser = xContent.createParser(NamedXContentRegistry.EMPTY, null, baos.toByteArray());
        response = responseParser.parse(parser, null);
      }
      return response;
    }
  }
}
