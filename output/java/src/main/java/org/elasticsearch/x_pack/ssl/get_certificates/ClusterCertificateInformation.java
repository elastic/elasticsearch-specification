
package org.elasticsearch.x_pack.ssl.get_certificates;

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

public class ClusterCertificateInformation  implements XContentable<ClusterCertificateInformation> {
  
  static final ParseField PATH = new ParseField("path");
  private String _path;
  public String getPath() { return this._path; }
  public ClusterCertificateInformation setPath(String val) { this._path = val; return this; }


  static final ParseField ALIAS = new ParseField("alias");
  private String _alias;
  public String getAlias() { return this._alias; }
  public ClusterCertificateInformation setAlias(String val) { this._alias = val; return this; }


  static final ParseField FORMAT = new ParseField("format");
  private String _format;
  public String getFormat() { return this._format; }
  public ClusterCertificateInformation setFormat(String val) { this._format = val; return this; }


  static final ParseField SUBJECT_DN = new ParseField("subject_dn");
  private String _subjectDn;
  public String getSubjectDn() { return this._subjectDn; }
  public ClusterCertificateInformation setSubjectDn(String val) { this._subjectDn = val; return this; }


  static final ParseField SERIAL_NUMBER = new ParseField("serial_number");
  private String _serialNumber;
  public String getSerialNumber() { return this._serialNumber; }
  public ClusterCertificateInformation setSerialNumber(String val) { this._serialNumber = val; return this; }


  static final ParseField HAS_PRIVATE_KEY = new ParseField("has_private_key");
  private Boolean _hasPrivateKey;
  public Boolean getHasPrivateKey() { return this._hasPrivateKey; }
  public ClusterCertificateInformation setHasPrivateKey(Boolean val) { this._hasPrivateKey = val; return this; }


  static final ParseField EXPIRY = new ParseField("expiry");
  private Date _expiry;
  public Date getExpiry() { return this._expiry; }
  public ClusterCertificateInformation setExpiry(Date val) { this._expiry = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_path != null) {
      builder.field(PATH.getPreferredName(), _path);
    }
    if (_alias != null) {
      builder.field(ALIAS.getPreferredName(), _alias);
    }
    if (_format != null) {
      builder.field(FORMAT.getPreferredName(), _format);
    }
    if (_subjectDn != null) {
      builder.field(SUBJECT_DN.getPreferredName(), _subjectDn);
    }
    if (_serialNumber != null) {
      builder.field(SERIAL_NUMBER.getPreferredName(), _serialNumber);
    }
    if (_hasPrivateKey != null) {
      builder.field(HAS_PRIVATE_KEY.getPreferredName(), _hasPrivateKey);
    }
    if (_expiry != null) {
      builder.field(EXPIRY.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_expiry.toInstant()));
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterCertificateInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterCertificateInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterCertificateInformation, Void> PARSER =
    new ObjectParser<>(ClusterCertificateInformation.class.getName(), false, ClusterCertificateInformation::new);

  static {
    PARSER.declareString(ClusterCertificateInformation::setPath, PATH);
    PARSER.declareString(ClusterCertificateInformation::setAlias, ALIAS);
    PARSER.declareString(ClusterCertificateInformation::setFormat, FORMAT);
    PARSER.declareString(ClusterCertificateInformation::setSubjectDn, SUBJECT_DN);
    PARSER.declareString(ClusterCertificateInformation::setSerialNumber, SERIAL_NUMBER);
    PARSER.declareBoolean(ClusterCertificateInformation::setHasPrivateKey, HAS_PRIVATE_KEY);
    PARSER.declareObject(ClusterCertificateInformation::setExpiry, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), EXPIRY);
  }

}
