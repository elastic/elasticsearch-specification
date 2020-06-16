
package org.elasticsearch.query_dsl.compound.function_score.functions.field_value;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FieldValueFactorModifier implements XContentable<FieldValueFactorModifier> {
  None("none"),
    Log("log"),
    Log1p("log1p"),
    Log2p("log2p"),
    Ln("ln"),
    Ln1p("ln1p"),
    Ln2p("ln2p"),
    Square("square"),
    Sqrt("sqrt"),
    Reciprocal("reciprocal");
  private final String textRepresentation;

  private FieldValueFactorModifier(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FieldValueFactorModifier fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FieldValueFactorModifier, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "none": return FieldValueFactorModifier.None;
      case "log": return FieldValueFactorModifier.Log;
      case "log1p": return FieldValueFactorModifier.Log1p;
      case "log2p": return FieldValueFactorModifier.Log2p;
      case "ln": return FieldValueFactorModifier.Ln;
      case "ln1p": return FieldValueFactorModifier.Ln1p;
      case "ln2p": return FieldValueFactorModifier.Ln2p;
      case "square": return FieldValueFactorModifier.Square;
      case "sqrt": return FieldValueFactorModifier.Sqrt;
      case "reciprocal": return FieldValueFactorModifier.Reciprocal;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FieldValueFactorModifier.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
