
package org.elasticsearch.common;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum Bytes implements XContentable<Bytes> {
  B("b"),
    K("k"),
    Kb("kb"),
    M("m"),
    Mb("mb"),
    G("g"),
    Gb("gb"),
    T("t"),
    Tb("tb"),
    P("p"),
    Pb("pb");
  private final String textRepresentation;

  private Bytes(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public Bytes fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, Bytes, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "b": return Bytes.B;
      case "k": return Bytes.K;
      case "kb": return Bytes.Kb;
      case "m": return Bytes.M;
      case "mb": return Bytes.Mb;
      case "g": return Bytes.G;
      case "gb": return Bytes.Gb;
      case "t": return Bytes.T;
      case "tb": return Bytes.Tb;
      case "p": return Bytes.P;
      case "pb": return Bytes.Pb;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, Bytes.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
