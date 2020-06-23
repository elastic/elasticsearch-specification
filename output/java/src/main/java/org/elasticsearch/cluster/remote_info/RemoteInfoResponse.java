
package org.elasticsearch.cluster.remote_info;

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
import org.elasticsearch.cluster.remote_info.*;
import org.elasticsearch.common_abstractions.response.*;

public class RemoteInfoResponse extends DictionaryResponseBase<String, RemoteInfo> implements XContentable<RemoteInfoResponse> {
  
  static final ParseField REMOTES = new ParseField("remotes");
  private NamedContainer<String, RemoteInfo> _remotes;
  public NamedContainer<String, RemoteInfo> getRemotes() { return this._remotes; }
  public RemoteInfoResponse setRemotes(NamedContainer<String, RemoteInfo> val) { this._remotes = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_remotes != null) {
      builder.field(REMOTES.getPreferredName());
      _remotes.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public RemoteInfoResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return RemoteInfoResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<RemoteInfoResponse, Void> PARSER =
    new ObjectParser<>(RemoteInfoResponse.class.getName(), false, RemoteInfoResponse::new);

  static {
    PARSER.declareObject(RemoteInfoResponse::setRemotes, (p, t) -> new NamedContainer<>(n -> () -> n,pp -> RemoteInfo.PARSER.apply(pp, null)), REMOTES);
  }

}
