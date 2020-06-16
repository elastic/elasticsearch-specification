
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
import org.elasticsearch.x_pack.security.privileges.put_privileges.*;
import org.elasticsearch.common_abstractions.response.*;

public class PutPrivilegesResponse extends DictionaryResponseBase<String, NamedContainer<String, PutPrivilegesStatus>> implements XContentable<PutPrivilegesResponse> {
  
  static final ParseField APPLICATIONS = new ParseField("applications");
  private NamedContainer<String, NamedContainer<String, PutPrivilegesStatus>> _applications;
  public NamedContainer<String, NamedContainer<String, PutPrivilegesStatus>> getApplications() { return this._applications; }
  public PutPrivilegesResponse setApplications(NamedContainer<String, NamedContainer<String, PutPrivilegesStatus>> val) { this._applications = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_applications != null) {
      builder.field(APPLICATIONS.getPreferredName());
      _applications.toXContent(builder, params);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public PutPrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return PutPrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<PutPrivilegesResponse, Void> PARSER =
    new ObjectParser<>(PutPrivilegesResponse.class.getName(), false, PutPrivilegesResponse::new);

  static {
    PARSER.declareObject(PutPrivilegesResponse::setApplications, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO NamedContainer<String, PutPrivilegesStatus> */), APPLICATIONS);
  }

}
