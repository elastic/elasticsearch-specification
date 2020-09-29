
package org.elasticsearch.document.multiple;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class Retries  implements XContentable<Retries> {
  
  static final ParseField BULK = new ParseField("bulk");
  private long _bulk;
  private boolean _bulk$isSet;
  public long getBulk() { return this._bulk; }
  public Retries setBulk(long val) {
    this._bulk = val;
    _bulk$isSet = true;
    return this;
  }

  static final ParseField SEARCH = new ParseField("search");
  private long _search;
  private boolean _search$isSet;
  public long getSearch() { return this._search; }
  public Retries setSearch(long val) {
    this._search = val;
    _search$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_bulk$isSet) {
      builder.field(BULK.getPreferredName(), _bulk);
    }
    if (_search$isSet) {
      builder.field(SEARCH.getPreferredName(), _search);
    }
  }

  @Override
  public Retries fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return Retries.PARSER.apply(parser, null);
  }

  public static final ObjectParser<Retries, Void> PARSER =
    new ObjectParser<>(Retries.class.getName(), false, Retries::new);

  static {
    PARSER.declareLong(Retries::setBulk, BULK);
    PARSER.declareLong(Retries::setSearch, SEARCH);
  }

}
