
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum PipelineFailure implements XContentable<PipelineFailure> {
  BadAuthentication("BadAuthentication"),
    BadResponse("BadResponse"),
    PingFailure("PingFailure"),
    SniffFailure("SniffFailure"),
    CouldNotStartSniffOnStartup("CouldNotStartSniffOnStartup"),
    MaxTimeoutReached("MaxTimeoutReached"),
    MaxRetriesReached("MaxRetriesReached"),
    Unexpected("Unexpected"),
    BadRequest("BadRequest"),
    NoNodesAttempted("NoNodesAttempted");
  private final String textRepresentation;

  private PipelineFailure(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public PipelineFailure fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, PipelineFailure, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "BadAuthentication": return PipelineFailure.BadAuthentication;
      case "BadResponse": return PipelineFailure.BadResponse;
      case "PingFailure": return PipelineFailure.PingFailure;
      case "SniffFailure": return PipelineFailure.SniffFailure;
      case "CouldNotStartSniffOnStartup": return PipelineFailure.CouldNotStartSniffOnStartup;
      case "MaxTimeoutReached": return PipelineFailure.MaxTimeoutReached;
      case "MaxRetriesReached": return PipelineFailure.MaxRetriesReached;
      case "Unexpected": return PipelineFailure.Unexpected;
      case "BadRequest": return PipelineFailure.BadRequest;
      case "NoNodesAttempted": return PipelineFailure.NoNodesAttempted;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, PipelineFailure.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
