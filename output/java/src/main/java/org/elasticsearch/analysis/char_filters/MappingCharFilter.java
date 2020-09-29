
package org.elasticsearch.analysis.char_filters;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.analysis.char_filters.*;

public class MappingCharFilter extends CharFilterBase implements XContentable<MappingCharFilter> {
  
  static final ParseField MAPPINGS = new ParseField("mappings");
  private List<String> _mappings;
  public List<String> getMappings() { return this._mappings; }
  public MappingCharFilter setMappings(List<String> val) { this._mappings = val; return this; }

  static final ParseField MAPPINGS_PATH = new ParseField("mappings_path");
  private String _mappingsPath;
  public String getMappingsPath() { return this._mappingsPath; }
  public MappingCharFilter setMappingsPath(String val) { this._mappingsPath = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_mappings != null) {
      builder.array(MAPPINGS.getPreferredName(), _mappings);
    }
    if (_mappingsPath != null) {
      builder.field(MAPPINGS_PATH.getPreferredName(), _mappingsPath);
    }
  }

  @Override
  public MappingCharFilter fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MappingCharFilter.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MappingCharFilter, Void> PARSER =
    new ObjectParser<>(MappingCharFilter.class.getName(), false, MappingCharFilter::new);

  static {
    PARSER.declareStringArray(MappingCharFilter::setMappings, MAPPINGS);
    PARSER.declareString(MappingCharFilter::setMappingsPath, MAPPINGS_PATH);
  }

}
