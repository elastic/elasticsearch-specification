
package org.elasticsearch.indices.alias_management.alias;

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
import org.elasticsearch.indices.alias_management.alias.actions.*;
import org.elasticsearch.common_options.time_unit.*;

public class BulkAliasRequest  implements XContentable<BulkAliasRequest> {
  
  static final ParseField ACTIONS = new ParseField("actions");
  private List<AliasAction> _actions;
  public List<AliasAction> getActions() { return this._actions; }
  public BulkAliasRequest setActions(List<AliasAction> val) { this._actions = val; return this; }


  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private Time _masterTimeout;
  public Time getMasterTimeout() { return this._masterTimeout; }
  public BulkAliasRequest setMasterTimeout(Time val) { this._masterTimeout = val; return this; }


  static final ParseField TIMEOUT = new ParseField("timeout");
  private Time _timeout;
  public Time getTimeout() { return this._timeout; }
  public BulkAliasRequest setTimeout(Time val) { this._timeout = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName());
      _masterTimeout.toXContent(builder, params);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName());
      _timeout.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public BulkAliasRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkAliasRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkAliasRequest, Void> PARSER =
    new ObjectParser<>(BulkAliasRequest.class.getName(), false, BulkAliasRequest::new);

  static {
    PARSER.declareObjectArray(BulkAliasRequest::setActions, (p, t) -> AliasAction.PARSER.apply(p, t), ACTIONS);
    PARSER.declareObject(BulkAliasRequest::setMasterTimeout, (p, t) -> Time.PARSER.apply(p, t), MASTER_TIMEOUT);
    PARSER.declareObject(BulkAliasRequest::setTimeout, (p, t) -> Time.PARSER.apply(p, t), TIMEOUT);
  }

}
