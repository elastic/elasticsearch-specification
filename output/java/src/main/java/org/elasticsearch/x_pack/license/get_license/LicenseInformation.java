
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

public class LicenseInformation  implements XContentable<LicenseInformation> {
  
  static final ParseField EXPIRY_DATE = new ParseField("expiry_date");
  private Date _expiryDate;
  public Date getExpiryDate() { return this._expiryDate; }
  public LicenseInformation setExpiryDate(Date val) { this._expiryDate = val; return this; }

  static final ParseField EXPIRY_DATE_IN_MILLIS = new ParseField("expiry_date_in_millis");
  private long _expiryDateInMillis;
  private boolean _expiryDateInMillis$isSet;
  public long getExpiryDateInMillis() { return this._expiryDateInMillis; }
  public LicenseInformation setExpiryDateInMillis(long val) {
    this._expiryDateInMillis = val;
    _expiryDateInMillis$isSet = true;
    return this;
  }

  static final ParseField ISSUE_DATE = new ParseField("issue_date");
  private Date _issueDate;
  public Date getIssueDate() { return this._issueDate; }
  public LicenseInformation setIssueDate(Date val) { this._issueDate = val; return this; }

  static final ParseField ISSUE_DATE_IN_MILLIS = new ParseField("issue_date_in_millis");
  private long _issueDateInMillis;
  private boolean _issueDateInMillis$isSet;
  public long getIssueDateInMillis() { return this._issueDateInMillis; }
  public LicenseInformation setIssueDateInMillis(long val) {
    this._issueDateInMillis = val;
    _issueDateInMillis$isSet = true;
    return this;
  }

  static final ParseField ISSUED_TO = new ParseField("issued_to");
  private String _issuedTo;
  public String getIssuedTo() { return this._issuedTo; }
  public LicenseInformation setIssuedTo(String val) { this._issuedTo = val; return this; }

  static final ParseField ISSUER = new ParseField("issuer");
  private String _issuer;
  public String getIssuer() { return this._issuer; }
  public LicenseInformation setIssuer(String val) { this._issuer = val; return this; }

  static final ParseField MAX_NODES = new ParseField("max_nodes");
  private long _maxNodes;
  private boolean _maxNodes$isSet;
  public long getMaxNodes() { return this._maxNodes; }
  public LicenseInformation setMaxNodes(long val) {
    this._maxNodes = val;
    _maxNodes$isSet = true;
    return this;
  }

  static final ParseField MAX_RESOURCE_UNITS = new ParseField("max_resource_units");
  private int _maxResourceUnits;
  private boolean _maxResourceUnits$isSet;
  public int getMaxResourceUnits() { return this._maxResourceUnits; }
  public LicenseInformation setMaxResourceUnits(int val) {
    this._maxResourceUnits = val;
    _maxResourceUnits$isSet = true;
    return this;
  }

  static final ParseField STATUS = new ParseField("status");
  private LicenseStatus _status;
  public LicenseStatus getStatus() { return this._status; }
  public LicenseInformation setStatus(LicenseStatus val) { this._status = val; return this; }

  static final ParseField TYPE = new ParseField("type");
  private LicenseType _type;
  public LicenseType getType() { return this._type; }
  public LicenseInformation setType(LicenseType val) { this._type = val; return this; }

  static final ParseField UID = new ParseField("uid");
  private String _uid;
  public String getUid() { return this._uid; }
  public LicenseInformation setUid(String val) { this._uid = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_expiryDate != null) {
      builder.field(EXPIRY_DATE.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_expiryDate.toInstant()));
    }
    if (_expiryDateInMillis$isSet) {
      builder.field(EXPIRY_DATE_IN_MILLIS.getPreferredName(), _expiryDateInMillis);
    }
    if (_issueDate != null) {
      builder.field(ISSUE_DATE.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_issueDate.toInstant()));
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
    if (_maxResourceUnits$isSet) {
      builder.field(MAX_RESOURCE_UNITS.getPreferredName(), _maxResourceUnits);
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
  }

  @Override
  public LicenseInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return LicenseInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<LicenseInformation, Void> PARSER =
    new ObjectParser<>(LicenseInformation.class.getName(), false, LicenseInformation::new);

  static {
    PARSER.declareObject(LicenseInformation::setExpiryDate, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), EXPIRY_DATE);
    PARSER.declareLong(LicenseInformation::setExpiryDateInMillis, EXPIRY_DATE_IN_MILLIS);
    PARSER.declareObject(LicenseInformation::setIssueDate, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), ISSUE_DATE);
    PARSER.declareLong(LicenseInformation::setIssueDateInMillis, ISSUE_DATE_IN_MILLIS);
    PARSER.declareString(LicenseInformation::setIssuedTo, ISSUED_TO);
    PARSER.declareString(LicenseInformation::setIssuer, ISSUER);
    PARSER.declareLong(LicenseInformation::setMaxNodes, MAX_NODES);
    PARSER.declareInt(LicenseInformation::setMaxResourceUnits, MAX_RESOURCE_UNITS);
    PARSER.declareField(LicenseInformation::setStatus, (p, t) -> LicenseStatus.PARSER.apply(p), STATUS, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareField(LicenseInformation::setType, (p, t) -> LicenseType.PARSER.apply(p), TYPE, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareString(LicenseInformation::setUid, UID);
  }

}
