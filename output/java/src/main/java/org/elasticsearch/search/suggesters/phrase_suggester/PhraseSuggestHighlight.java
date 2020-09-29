
package org.elasticsearch.search.suggesters.phrase_suggester;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;


public class PhraseSuggestHighlight  implements XContentable<PhraseSuggestHighlight> {
  
  static final ParseField POST_TAG = new ParseField("post_tag");
  private String _postTag;
  public String getPostTag() { return this._postTag; }
  public PhraseSuggestHighlight setPostTag(String val) { this._postTag = val; return this; }

  static final ParseField PRE_TAG = new ParseField("pre_tag");
  private String _preTag;
  public String getPreTag() { return this._preTag; }
  public PhraseSuggestHighlight setPreTag(String val) { this._preTag = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_postTag != null) {
      builder.field(POST_TAG.getPreferredName(), _postTag);
    }
    if (_preTag != null) {
      builder.field(PRE_TAG.getPreferredName(), _preTag);
    }
  }

  @Override
  public PhraseSuggestHighlight fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PhraseSuggestHighlight.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PhraseSuggestHighlight, Void> PARSER =
    new ObjectParser<>(PhraseSuggestHighlight.class.getName(), false, PhraseSuggestHighlight::new);

  static {
    PARSER.declareString(PhraseSuggestHighlight::setPostTag, POST_TAG);
    PARSER.declareString(PhraseSuggestHighlight::setPreTag, PRE_TAG);
  }

}
