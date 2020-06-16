
package org.elasticsearch.indices.alias_management.get_alias;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.Either;
import org.elasticsearch.XContentable;
import org.elasticsearch.NamedContainer;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.indices.alias_management.*;

public class IndexAliases  implements XContentable<IndexAliases> {
  
  static final ParseField ALIASES = new ParseField("aliases");
  private NamedContainer<String, AliasDefinition> _aliases;
  public NamedContainer<String, AliasDefinition> getAliases() { return this._aliases; }
  public IndexAliases setAliases(NamedContainer<String, AliasDefinition> val) { this._aliases = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_aliases != null) {
      builder.field(ALIASES.getPreferredName());
      _aliases.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public IndexAliases fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return IndexAliases.PARSER.apply(parser, null);
  }

  public static final ObjectParser<IndexAliases, Void> PARSER =
    new ObjectParser<>(IndexAliases.class.getName(), false, IndexAliases::new);

  static {
    PARSER.declareObject(IndexAliases::setAliases, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> AliasDefinition.PARSER.apply(pp, null)), ALIASES);
  }

}
