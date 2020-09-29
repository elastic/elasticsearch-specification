
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

public class HyphenationDecompounderTokenFilter extends CompoundWordTokenFilterBase implements XContentable<HyphenationDecompounderTokenFilter> {
  

  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    
  }

  @Override
  public HyphenationDecompounderTokenFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return HyphenationDecompounderTokenFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<HyphenationDecompounderTokenFilter, Void> PARSER =
    new ObjectParser<>(HyphenationDecompounderTokenFilter.class.getName(), false, HyphenationDecompounderTokenFilter::new);

  static {
    
  }

}
