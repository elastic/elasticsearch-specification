
package org.elasticsearch.x_pack.license.get_license;

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
import org.elasticsearch.x_pack.license.get_license.*;

public class License  implements XContentable<License> {
  
  static final ParseField EXPIRY_DATE_IN_MILLIS = new ParseField("expiry_date_in_millis");
  private long _expiryDateInMillis;
  private boolean _expiryDateInMillis$isSet;
  public long getExpiryDateInMillis() { return this._expiryDateInMillis; }
  public License setExpiryDateInMillis(long val) {
    this._expiryDateInMillis = val;
    _expiryDateInMillis$isSet = true;
    return this;
  }

  static final ParseField ISSUE_DATE_IN_MILLIS = new ParseField("issue_date_in_millis");
  private long _issueDateInMillis;
  private boolean _issueDateInMillis$isSet;
  public long getIssueDateInMillis() { return this._issueDateInMillis; }
  public License setIssueDateInMillis(long val) {
    this._issueDateInMillis = val;
    _issueDateInMillis$isSet = true;
    return this;
  }

  static final ParseField ISSUED_TO = new ParseField("issued_to");
  private String _issuedTo;
  public String getIssuedTo() { return this._issuedTo; }
  public License setIssuedTo(String val) { this._issuedTo = val; return this; }

  static final ParseField ISSUER = new ParseField("issuer");
  private String _issuer;
  public String getIssuer() { return this._issuer; }
  public License setIssuer(String val) { this._issuer = val; return this; }

  static final ParseField MAX_NODES = new ParseField("max_nodes");
  private long _maxNodes;
  private boolean _maxNodes$isSet;
  public long getMaxNodes() { return this._maxNodes; }
  public License setMaxNodes(long val) {
    this._maxNodes = val;
    _maxNodes$isSet = true;
    return this;
  }

  static final ParseField SIGNATURE = new ParseField("signature");
  private String _signature;
  public String getSignature() { return this._signature; }
  public License setSignature(String val) { this._signature = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private LicenseType _type;
  public LicenseType getType() { return this._type; }
  public License setType(LicenseType val) { this._type = val; return this; }

  static final ParseField UID = new ParseField("uid");
  private String _uid;
  public String getUid() { return this._uid; }
  public License setUid(String val) { this._uid = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_expiryDateInMillis$isSet) {
      builder.field(EXPIRY_DATE_IN_MILLIS.getPreferredName(), _expiryDateInMillis);
    }
    if (_issueDateInMillis$isSet) {
      builder.field(ISSUE_DATE_IN_MILLIS.getPreferredName(), _issueDateInMillis);
    }
    if (_issuedTo != null) {
      builder.field(ISSUED_TO.getPreferredName(), _issuedTo);
    }
    if (_issuer != null) {
      builder.field(ISSUER.getPreferredName(), _issuer);
    }
    if (_maxNodes$isSet) {
      builder.field(MAX_NODES.getPreferredName(), _maxNodes);
    }
    if (_signature != null) {
      builder.field(SIGNATURE.getPreferredName(), _signature);
    }
    if (_type != null) {
      builder.field(TYPE.getPreferredName());
      _type.toXContent(builder, params);
    }
    if (_uid != null) {
      builder.field(UID.getPreferredName(), _uid);
    }
  }

  @Override
  public License fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return License.PARSER.apply(parser, null);
  }

  public static final ObjectParser<License, Void> PARSER =
    new ObjectParser<>(License.class.getName(), false, License::new);

  static {
    PARSER.declareLong(License::setExpiryDateInMillis, EXPIRY_DATE_IN_MILLIS);
    PARSER.declareLong(License::setIssueDateInMillis, ISSUE_DATE_IN_MILLIS);
    PARSER.declareString(License::setIssuedTo, ISSUED_TO);
    PARSER.declareString(License::setIssuer, ISSUER);
    PARSER.declareLong(License::setMaxNodes, MAX_NODES);
    PARSER.declareString(License::setSignature, SIGNATURE);
    PARSER.declareField(License::setType, (p, t) -> LicenseType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(License::setUid, UID);
  }

}
