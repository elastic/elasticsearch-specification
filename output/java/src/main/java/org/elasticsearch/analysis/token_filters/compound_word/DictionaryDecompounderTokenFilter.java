
package org.elasticsearch.analysis.token_filters.compound_word;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.token_filters.compound_word.*;
import org.elasticsearch.analysis.token_filters.*;

public class DictionaryDecompounderTokenFilter extends CompoundWordTokenFilterBase implements XContentable<DictionaryDecompounderTokenFilter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public DictionaryDecompounderTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return DictionaryDecompounderTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<DictionaryDecompounderTokenFilter, Void> PARSER =
    new ObjectParser<>(DictionaryDecompounderTokenFilter.class.getName(), false, DictionaryDecompounderTokenFilter::new);

  static {
    
  }

}
