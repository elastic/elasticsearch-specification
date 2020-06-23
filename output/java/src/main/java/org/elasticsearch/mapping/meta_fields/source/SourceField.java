
package org.elasticsearch.mapping.meta_fields.source;

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


public class SourceField  implements XContentable<SourceField> {
  
  static final ParseField COMPRESS = new ParseField("compress");
  private Boolean _compress;
  public Boolean getCompress() { return this._compress; }
  public SourceField setCompress(Boolean val) { this._compress = val; return this; }


  static final ParseField COMPRESS_THRESHOLD = new ParseField("compress_threshold");
  private String _compressThreshold;
  public String getCompressThreshold() { return this._compressThreshold; }
  public SourceField setCompressThreshold(String val) { this._compressThreshold = val; return this; }


  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public SourceField setEnabled(Boolean val) { this._enabled = val; return this; }


  static final ParseField EXCLUDES = new ParseField("excludes");
  private List<String> _excludes;
  public List<String> getExcludes() { return this._excludes; }
  public SourceField setExcludes(List<String> val) { this._excludes = val; return this; }


  static final ParseField INCLUDES = new ParseField("includes");
  private List<String> _includes;
  public List<String> getIncludes() { return this._includes; }
  public SourceField setIncludes(List<String> val) { this._includes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_compress != null) {
      builder.field(COMPRESS.getPreferredName(), _compress);
    }
    if (_compressThreshold != null) {
      builder.field(COMPRESS_THRESHOLD.getPreferredName(), _compressThreshold);
    }
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_excludes != null) {
      builder.array(EXCLUDES.getPreferredName(), _excludes);
    }
    if (_includes != null) {
      builder.array(INCLUDES.getPreferredName(), _includes);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public SourceField fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return SourceField.PARSER.apply(parser, null);
  }

  public static final ObjectParser<SourceField, Void> PARSER =
    new ObjectParser<>(SourceField.class.getName(), false, SourceField::new);

  static {
    PARSER.declareBoolean(SourceField::setCompress, COMPRESS);
    PARSER.declareString(SourceField::setCompressThreshold, COMPRESS_THRESHOLD);
    PARSER.declareBoolean(SourceField::setEnabled, ENABLED);
    PARSER.declareStringArray(SourceField::setExcludes, EXCLUDES);
    PARSER.declareStringArray(SourceField::setIncludes, INCLUDES);
  }

}
