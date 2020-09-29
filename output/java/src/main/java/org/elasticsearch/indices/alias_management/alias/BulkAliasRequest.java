
package org.elasticsearch.indices.alias_management.alias;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.common_options.time_unit.*;
import org.elasticsearch.indices.alias_management.alias.actions.*;
import org.elasticsearch.common_abstractions.request.*;

public class BulkAliasRequest extends RequestBase<BulkAliasRequest> implements XContentable<BulkAliasRequest> {
  
  static final ParseField MASTER_TIMEOUT = new ParseField("master_timeout");
  private String _masterTimeout;
  public String getMasterTimeout() { return this._masterTimeout; }
  public BulkAliasRequest setMasterTimeout(String val) { this._masterTimeout = val; return this; }

  static final ParseField TIMEOUT = new ParseField("timeout");
  private String _timeout;
  public String getTimeout() { return this._timeout; }
  public BulkAliasRequest setTimeout(String val) { this._timeout = val; return this; }

  static final ParseField ACTIONS = new ParseField("actions");
  private List<AliasAction> _actions;
  public List<AliasAction> getActions() { return this._actions; }
  public BulkAliasRequest setActions(List<AliasAction> val) { this._actions = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_masterTimeout != null) {
      builder.field(MASTER_TIMEOUT.getPreferredName(), _masterTimeout);
    }
    if (_timeout != null) {
      builder.field(TIMEOUT.getPreferredName(), _timeout);
    }
    if (_actions != null) {
      builder.array(ACTIONS.getPreferredName(), _actions);
    }
  }

  @Override
  public BulkAliasRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return BulkAliasRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<BulkAliasRequest, Void> PARSER =
    new ObjectParser<>(BulkAliasRequest.class.getName(), false, BulkAliasRequest::new);

  static {
    PARSER.declareString(BulkAliasRequest::setMasterTimeout, MASTER_TIMEOUT);
    PARSER.declareString(BulkAliasRequest::setTimeout, TIMEOUT);
    PARSER.declareObjectArray(BulkAliasRequest::setActions, (p, t) -> AliasAction.PARSER.apply(p, t), ACTIONS);
  }

}
