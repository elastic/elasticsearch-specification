
package org.elasticsearch.index_modules.index_settings.settings;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum RecoveryInitialShards implements XContentable<RecoveryInitialShards> {
  Quorem("quorem"),
    Quorem_1("quorem-1"),
    Full("full"),
    Full_1("full-1");
  private final String textRepresentation;

  private RecoveryInitialShards(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public RecoveryInitialShards fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, RecoveryInitialShards, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "quorem": return RecoveryInitialShards.Quorem;
      case "quorem-1": return RecoveryInitialShards.Quorem_1;
      case "full": return RecoveryInitialShards.Full;
      case "full-1": return RecoveryInitialShards.Full_1;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, RecoveryInitialShards.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
