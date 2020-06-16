
package org.elasticsearch.common_abstractions.response;

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

public class ElasticsearchVersionInfo  implements XContentable<ElasticsearchVersionInfo> {
  
  static final ParseField LUCENE_VERSION = new ParseField("lucene_version");
  private String _luceneVersion;
  public String getLuceneVersion() { return this._luceneVersion; }
  public ElasticsearchVersionInfo setLuceneVersion(String val) { this._luceneVersion = val; return this; }


  static final ParseField NUMBER = new ParseField("number");
  private String _number;
  public String getNumber() { return this._number; }
  public ElasticsearchVersionInfo setNumber(String val) { this._number = val; return this; }


  static final ParseField BUILD_FLAVOR = new ParseField("build_flavor");
  private String _buildFlavor;
  public String getBuildFlavor() { return this._buildFlavor; }
  public ElasticsearchVersionInfo setBuildFlavor(String val) { this._buildFlavor = val; return this; }


  static final ParseField BUILD_TYPE = new ParseField("build_type");
  private String _buildType;
  public String getBuildType() { return this._buildType; }
  public ElasticsearchVersionInfo setBuildType(String val) { this._buildType = val; return this; }


  static final ParseField BUILD_HASH = new ParseField("build_hash");
  private String _buildHash;
  public String getBuildHash() { return this._buildHash; }
  public ElasticsearchVersionInfo setBuildHash(String val) { this._buildHash = val; return this; }


  static final ParseField BUILD_DATE = new ParseField("build_date");
  private Date _buildDate;
  public Date getBuildDate() { return this._buildDate; }
  public ElasticsearchVersionInfo setBuildDate(Date val) { this._buildDate = val; return this; }


  static final ParseField BUILD_SNAPSHOT = new ParseField("build_snapshot");
  private Boolean _buildSnapshot;
  public Boolean getBuildSnapshot() { return this._buildSnapshot; }
  public ElasticsearchVersionInfo setBuildSnapshot(Boolean val) { this._buildSnapshot = val; return this; }


  static final ParseField MINIMUM_WIRE_COMPATIBILITY_VERSION = new ParseField("minimum_wire_compatibility_version");
  private String _minimumWireCompatibilityVersion;
  public String getMinimumWireCompatibilityVersion() { return this._minimumWireCompatibilityVersion; }
  public ElasticsearchVersionInfo setMinimumWireCompatibilityVersion(String val) { this._minimumWireCompatibilityVersion = val; return this; }


  static final ParseField MINIMUM_INDEX_COMPATIBILITY_VERSION = new ParseField("minimum_index_compatibility_version");
  private String _minimumIndexCompatibilityVersion;
  public String getMinimumIndexCompatibilityVersion() { return this._minimumIndexCompatibilityVersion; }
  public ElasticsearchVersionInfo setMinimumIndexCompatibilityVersion(String val) { this._minimumIndexCompatibilityVersion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_luceneVersion != null) {
      builder.field(LUCENE_VERSION.getPreferredName(), _luceneVersion);
    }
    if (_number != null) {
      builder.field(NUMBER.getPreferredName(), _number);
    }
    if (_buildFlavor != null) {
      builder.field(BUILD_FLAVOR.getPreferredName(), _buildFlavor);
    }
    if (_buildType != null) {
      builder.field(BUILD_TYPE.getPreferredName(), _buildType);
    }
    if (_buildHash != null) {
      builder.field(BUILD_HASH.getPreferredName(), _buildHash);
    }
    if (_buildDate != null) {
      builder.field(BUILD_DATE.getPreferredName(),
        DateTimeFormatter.ISO_DATE.format(_buildDate.toInstant()));
    }
    if (_buildSnapshot != null) {
      builder.field(BUILD_SNAPSHOT.getPreferredName(), _buildSnapshot);
    }
    if (_minimumWireCompatibilityVersion != null) {
      builder.field(MINIMUM_WIRE_COMPATIBILITY_VERSION.getPreferredName(), _minimumWireCompatibilityVersion);
    }
    if (_minimumIndexCompatibilityVersion != null) {
      builder.field(MINIMUM_INDEX_COMPATIBILITY_VERSION.getPreferredName(), _minimumIndexCompatibilityVersion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ElasticsearchVersionInfo fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ElasticsearchVersionInfo.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ElasticsearchVersionInfo, Void> PARSER =
    new ObjectParser<>(ElasticsearchVersionInfo.class.getName(), false, ElasticsearchVersionInfo::new);

  static {
    PARSER.declareString(ElasticsearchVersionInfo::setLuceneVersion, LUCENE_VERSION);
    PARSER.declareString(ElasticsearchVersionInfo::setNumber, NUMBER);
    PARSER.declareString(ElasticsearchVersionInfo::setBuildFlavor, BUILD_FLAVOR);
    PARSER.declareString(ElasticsearchVersionInfo::setBuildType, BUILD_TYPE);
    PARSER.declareString(ElasticsearchVersionInfo::setBuildHash, BUILD_HASH);
    PARSER.declareObject(ElasticsearchVersionInfo::setBuildDate, (p, t) -> Date.from(Instant.from(DateTimeFormatter.ISO_DATE.parse(p.text()))), BUILD_DATE);
    PARSER.declareBoolean(ElasticsearchVersionInfo::setBuildSnapshot, BUILD_SNAPSHOT);
    PARSER.declareString(ElasticsearchVersionInfo::setMinimumWireCompatibilityVersion, MINIMUM_WIRE_COMPATIBILITY_VERSION);
    PARSER.declareString(ElasticsearchVersionInfo::setMinimumIndexCompatibilityVersion, MINIMUM_INDEX_COMPATIBILITY_VERSION);
  }

}
