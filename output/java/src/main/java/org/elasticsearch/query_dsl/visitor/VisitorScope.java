
package org.elasticsearch.query_dsl.visitor;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum VisitorScope implements XContentable<VisitorScope> {
  Unknown("Unknown"),
    Query("Query"),
    Filter("Filter"),
    Must("Must"),
    MustNot("MustNot"),
    Should("Should"),
    PositiveQuery("PositiveQuery"),
    NegativeQuery("NegativeQuery"),
    Span("Span");
  private final String textRepresentation;

  private VisitorScope(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public VisitorScope fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, VisitorScope, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "Unknown": return VisitorScope.Unknown;
      case "Query": return VisitorScope.Query;
      case "Filter": return VisitorScope.Filter;
      case "Must": return VisitorScope.Must;
      case "MustNot": return VisitorScope.MustNot;
      case "Should": return VisitorScope.Should;
      case "PositiveQuery": return VisitorScope.PositiveQuery;
      case "NegativeQuery": return VisitorScope.NegativeQuery;
      case "Span": return VisitorScope.Span;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, VisitorScope.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
