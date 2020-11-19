package org.elasticsearch.client.experiments.base;

import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.ContextParser;
import org.elasticsearch.common.xcontent.ObjectParser;

public class ElasticsearchError {

  // TODO: add fields for the detailed representation of errors
  // See org.elasticsearch.rest.BytesRestResponse.build() and ElasticsearchException

  private int status;
  private String error;

  private ElasticsearchError() {}

  public ElasticsearchError(int status, String error) {
    this.status = status;
    this.error = error;
  }

  public int status() {
    return this.status;
  }

  private void status(int status) {
    this.status = status;
  }

  public String error() {
    return this.error;
  }

  private void error(String error) {
    this.error = error;
  }

  public static final ContextParser<FromXContent.Params, ElasticsearchError> PARSER;

  static {
    ObjectParser<ElasticsearchError, FromXContent.Params> op = new ObjectParser<>(
      "ElasticsearchError",
      ElasticsearchError::new
      );
    op.declareInt(ElasticsearchError::status, new ParseField("status"));
    op.declareString(ElasticsearchError::error, new ParseField("error"));
    PARSER = op;
  }
}
