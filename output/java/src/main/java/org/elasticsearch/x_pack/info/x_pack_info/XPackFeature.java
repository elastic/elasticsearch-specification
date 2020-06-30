
package org.elasticsearch.x_pack.info.x_pack_info;

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
import org.elasticsearch.x_pack.info.x_pack_info.*;

public class XPackFeature  implements XContentable<XPackFeature> {
  
  static final ParseField AVAILABLE = new ParseField("available");
  private Boolean _available;
  public Boolean getAvailable() { return this._available; }
  public XPackFeature setAvailable(Boolean val) { this._available = val; return this; }


  static final ParseField DESCRIPTION = new ParseField("description");
  private String _description;
  public String getDescription() { return this._description; }
  public XPackFeature setDescription(String val) { this._description = val; return this; }


  static final ParseField ENABLED = new ParseField("enabled");
  private Boolean _enabled;
  public Boolean getEnabled() { return this._enabled; }
  public XPackFeature setEnabled(Boolean val) { this._enabled = val; return this; }


  static final ParseField NATIVE_CODE_INFO = new ParseField("native_code_info");
  private NativeCodeInformation _nativeCodeInfo;
  public NativeCodeInformation getNativeCodeInfo() { return this._nativeCodeInfo; }
  public XPackFeature setNativeCodeInfo(NativeCodeInformation val) { this._nativeCodeInfo = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_available != null) {
      builder.field(AVAILABLE.getPreferredName(), _available);
    }
    if (_description != null) {
      builder.field(DESCRIPTION.getPreferredName(), _description);
    }
    if (_enabled != null) {
      builder.field(ENABLED.getPreferredName(), _enabled);
    }
    if (_nativeCodeInfo != null) {
      builder.field(NATIVE_CODE_INFO.getPreferredName());
      _nativeCodeInfo.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackFeature fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackFeature.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackFeature, Void> PARSER =
    new ObjectParser<>(XPackFeature.class.getName(), false, XPackFeature::new);

  static {
    PARSER.declareBoolean(XPackFeature::setAvailable, AVAILABLE);
    PARSER.declareString(XPackFeature::setDescription, DESCRIPTION);
    PARSER.declareBoolean(XPackFeature::setEnabled, ENABLED);
    PARSER.declareObject(XPackFeature::setNativeCodeInfo, (p, t) -> NativeCodeInformation.PARSER.apply(p, t), NATIVE_CODE_INFO);
  }

}
