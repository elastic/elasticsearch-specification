
package org.elasticsearch.index_modules.index_settings.store;

import org.elasticsearch.XContentable;
import org.elasticsearch.common.CheckedFunction;
import org.elasticsearch.common.xcontent.*;
import java.io.IOException;

public enum FileSystemStorageImplementation implements XContentable<FileSystemStorageImplementation> {
  Simplefs("simplefs"),
    Niofs("niofs"),
    Mmapfs("mmapfs"),
    DefaultFs("default_fs");
  private final String textRepresentation;

  private FileSystemStorageImplementation(final String text) { this.textRepresentation = text; }

  @Override
  public String toString() { return textRepresentation; }

  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    return builder.value(this.textRepresentation);
  }

  @Override
  public FileSystemStorageImplementation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PARSER.apply(parser);
  }

  public static final CheckedFunction<XContentParser, FileSystemStorageImplementation, IOException> PARSER = (parser) -> {
    String text = parser.text();
    switch (text) {
      case "simplefs": return FileSystemStorageImplementation.Simplefs;
      case "niofs": return FileSystemStorageImplementation.Niofs;
      case "mmapfs": return FileSystemStorageImplementation.Mmapfs;
      case "default_fs": return FileSystemStorageImplementation.DefaultFs;
      default:
        String message = java.lang.String.format("'%s' not a valid value for enum '%s'", text, FileSystemStorageImplementation.class.getName());
        throw new XContentParseException(parser.getTokenLocation(), message);
    }
  };
}
