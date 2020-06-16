
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
import org.elasticsearch.internal.*;
import org.elasticsearch.x_pack.license.get_license.*;

public class MinimalLicenseInformation  implements XContentable<MinimalLicenseInformation> {
  
  static final ParseField EXPIRY_DATE_IN_MILLIS = new ParseField("expiry_date_in_millis");
  private Long _expiryDateInMillis;
  public Long getExpiryDateInMillis() { return this._expiryDateInMillis; }
  public MinimalLicenseInformation setExpiryDateInMillis(Long val) { this._expiryDateInMillis = val; return this; }


  static final ParseField MODE = new ParseField("mode");
  private LicenseType _mode;
  public LicenseType getMode() { return this._mode; }
  public MinimalLicenseInformation setMode(LicenseType val) { this._mode = val; return this; }


  static final ParseField STATUS = new ParseField("status");
  private LicenseStatus _status;
  public LicenseStatus getStatus() { return this._status; }
  public MinimalLicenseInformation setStatus(LicenseStatus val) { this._status = val; return this; }


  static final ParseField TYPE = new ParseField("type");
  private LicenseType _type;
  public LicenseType getType() { return this._type; }
  public MinimalLicenseInformation setType(LicenseType val) { this._type = val; return this; }


  static final ParseField UID = new ParseField("uid");
  private String _uid;
  public String getUid() { return this._uid; }
  public MinimalLicenseInformation setUid(String val) { this._uid = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_expiryDateInMillis != null) {
      builder.field(EXPIRY_DATE_IN_MILLIS.getPreferredName(), _expiryDateInMillis);
    }
    if (_mode != null) {
      builder.field(MODE.getPreferredName());
      _mode.toXContent(builder, params);
    }
    if (_status != null) {
      builder.field(STATUS.getPreferredName());
      _status.toXContent(builder, params);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    if (_uid != null) {
      builder.field(UID.getPreferredName(), _uid);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public MinimalLicenseInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return MinimalLicenseInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<MinimalLicenseInformation, Void> PARSER =
    new ObjectParser<>(MinimalLicenseInformation.class.getName(), false, MinimalLicenseInformation::new);

  static {
    PARSER.declareLong(MinimalLicenseInformation::setExpiryDateInMillis, EXPIRY_DATE_IN_MILLIS);
    PARSER.declareField(MinimalLicenseInformation::setMode, (p, t) -> LicenseType.PARSER.apply(p), MODE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(MinimalLicenseInformation::setStatus, (p, t) -> LicenseStatus.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(MinimalLicenseInformation::setType, (p, t) -> LicenseType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(MinimalLicenseInformation::setUid, UID);
  }

}
