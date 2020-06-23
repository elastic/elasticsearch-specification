
package org.elasticsearch.x_pack.security.privileges.put_privileges;

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
import org.elasticsearch.common.*;
import org.elasticsearch.x_pack.security.privileges.put_privileges.*;

public class PutPrivilegesRequest  implements XContentable<PutPrivilegesRequest> {
  
  static final ParseField REFRESH = new ParseField("refresh");
  private Refresh _refresh;
  public Refresh getRefresh() { return this._refresh; }
  public PutPrivilegesRequest setRefresh(Refresh val) { this._refresh = val; return this; }


  static final ParseField APPLICATIONS = new ParseField("applications");
  private NamedContainer<String, NamedContainer<String, PrivilegesActions>> _applications;
  public NamedContainer<String, NamedContainer<String, PrivilegesActions>> getApplications() { return this._applications; }
  public PutPrivilegesRequest setApplications(NamedContainer<String, NamedContainer<String, PrivilegesActions>> val) { this._applications = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_refresh != null) {
      builder.field(REFRESH.getPreferredName());
      _refresh.toXContent(builder, params);
    }
    if (_applications != null) {
      builder.field(APPLICATIONS.getPreferredName());
      _applications.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutPrivilegesRequest fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutPrivilegesRequest.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutPrivilegesRequest, Void> PARSER =
    new ObjectParser<>(PutPrivilegesRequest.class.getName(), false, PutPrivilegesRequest::new);

  static {
    PARSER.declareField(PutPrivilegesRequest::setRefresh, (p, t) -> Refresh.PARSER.apply(p), REFRESH, ObjectParser.ValueType.STRING_OR_NULL);
    PARSER.declareObject(PutPrivilegesRequest::setApplications, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO NamedContainer<String, PrivilegesActions> */), APPLICATIONS);
  }

}
