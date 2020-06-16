
package org.elasticsearch.indices.index_settings.index_templates.get_index_template;

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
import org.elasticsearch.common_options.time_unit.*;

public class GetIndexTemplateRequest  implements XContentable<GetIndexTemplateRequest> {
  
  static final ParseField FLAT_SETTINGS = new ParseField("flat_settings");
  private Boolean _flatSettings;
  public Boolean getFlatSettings() { return this._flatSettings; }
  public GetIndexTemplateRequest setFlatSettings(Boolean val) { this._flatSettings = val; return this; }


  static final ParseField INCLUDE_TYPE_NAME = new ParseField("include_type_name");
  private Boolean _includeTypeName;
  public Boolean getIncludeTypeName() { return this._includeTypeName; }
  public GetIndexTemplateRequest setIncludeTypeName(Boolean val) { this._includeTypeName = val; return this; }


  static final ParseField LOCAL = new ParseField("local");
  private Boolean _local;
  public Boolean getLocal() { return this._local; }
  public GetIndexTemplateRequest setLocal(Boolean val) { this._local = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public GetIndexTemplateRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_flatSettings != null) {
      builder.field(FLAT_SETTINGS.getPreferredName(), _flatSettings);
    }
    if (_includeTypeName != null) {
      builder.field(INCLUDE_TYPE_NAME.getPreferredName(), _includeTypeName);
    }
    if (_local != null) {
      builder.field(LOCAL.getPreferredName(), _local);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public GetIndexTemplateRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetIndexTemplateRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetIndexTemplateRequest, Void> PARSER =
    new ObjectParser<>(GetIndexTemplateRequest.class.getName(), false, GetIndexTemplateRequest::new);

  static {
    PARSER.declareBoolean(GetIndexTemplateRequest::setFlatSettings, FLAT_SETTINGS);
    PARSER.declareBoolean(GetIndexTemplateRequest::setIncludeTypeName, INCLUDE_TYPE_NAME);
    PARSER.declareBoolean(GetIndexTemplateRequest::setLocal, LOCAL);
    PARSER.declareObject(GetIndexTemplateRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
  }

}
