
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

public class XPackInfoResponse  implements XContentable<XPackInfoResponse> {
  
  static final ParseField BUILD = new ParseField("build");
  private XPackBuildInformation _build;
  public XPackBuildInformation getBuild() { return this._build; }
  public XPackInfoResponse setBuild(XPackBuildInformation val) { this._build = val; return this; }


  static final ParseField FEATURES = new ParseField("features");
  private XPackFeatures _features;
  public XPackFeatures getFeatures() { return this._features; }
  public XPackInfoResponse setFeatures(XPackFeatures val) { this._features = val; return this; }


  static final ParseField LICENSE = new ParseField("license");
  private MinimalLicenseInformation _license;
  public MinimalLicenseInformation getLicense() { return this._license; }
  public XPackInfoResponse setLicense(MinimalLicenseInformation val) { this._license = val; return this; }


  static final ParseField TAGLINE = new ParseField("tagline");
  private String _tagline;
  public String getTagline() { return this._tagline; }
  public XPackInfoResponse setTagline(String val) { this._tagline = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_build != null) {
      builder.field(BUILD.getPreferredName());
      _build.toXContent(builder, params);
    }
    if (_features != null) {
      builder.field(FEATURES.getPreferredName());
      _features.toXContent(builder, params);
    }
    if (_license != null) {
      builder.field(LICENSE.getPreferredName());
      _license.toXContent(builder, params);
    }
    if (_tagline != null) {
      builder.field(TAGLINE.getPreferredName(), _tagline);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public XPackInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return XPackInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<XPackInfoResponse, Void> PARSER =
    new ObjectParser<>(XPackInfoResponse.class.getName(), false, XPackInfoResponse::new);

  static {
    PARSER.declareObject(XPackInfoResponse::setBuild, (p, t) -> XPackBuildInformation.PARSER.apply(p, t), BUILD);
    PARSER.declareObject(XPackInfoResponse::setFeatures, (p, t) -> XPackFeatures.PARSER.apply(p, t), FEATURES);
    PARSER.declareObject(XPackInfoResponse::setLicense, (p, t) -> MinimalLicenseInformation.PARSER.apply(p, t), LICENSE);
    PARSER.declareString(XPackInfoResponse::setTagline, TAGLINE);
  }

}
