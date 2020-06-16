
package org.elasticsearch.indices.analyze;

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


public class CharFilterDetail  implements XContentable<CharFilterDetail> {
  
  static final ParseField FILTERED_TEXT = new ParseField("filtered_text");
  private List<String> _filteredText;
  public List<String> getFilteredText() { return this._filteredText; }
  public CharFilterDetail setFilteredText(List<String> val) { this._filteredText = val; return this; }


  static final ParseField NAME = new ParseField("name");
  private String _name;
  public String getName() { return this._name; }
  public CharFilterDetail setName(String val) { this._name = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_filteredText != null) {
      builder.array(FILTERED_TEXT.getPreferredName(), _filteredText);
    }
    if (_name != null) {
      builder.field(NAME.getPreferredName(), _name);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public CharFilterDetail fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CharFilterDetail.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CharFilterDetail, Void> PARSER =
    new ObjectParser<>(CharFilterDetail.class.getName(), false, CharFilterDetail::new);

  static {
    PARSER.declareStringArray(CharFilterDetail::setFilteredText, FILTERED_TEXT);
    PARSER.declareString(CharFilterDetail::setName, NAME);
  }

}
