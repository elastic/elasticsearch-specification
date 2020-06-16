
package org.elasticsearch.x_pack.security.privileges.get_privileges;

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

public class GetPrivilegesResponse extends DictionaryResponseBase<String, NamedContainer<String, PrivilegesActions>> implements XContentable<GetPrivilegesResponse> {
  
  static final ParseField APPLICATIONS = new ParseField("applications");
  private NamedContainer<String, NamedContainer<String, PrivilegesActions>> _applications;
  public NamedContainer<String, NamedContainer<String, PrivilegesActions>> getApplications() { return this._applications; }
  public GetPrivilegesResponse setApplications(NamedContainer<String, NamedContainer<String, PrivilegesActions>> val) { this._applications = val; return this; }


  
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
  public GetPrivilegesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetPrivilegesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetPrivilegesResponse, Void> PARSER =
    new ObjectParser<>(GetPrivilegesResponse.class.getName(), false, GetPrivilegesResponse::new);

  static {
    PARSER.declareObject(GetPrivilegesResponse::setApplications, (p, t) -> new NamedContainer<>(n -> () -> n,null /* TODO NamedContainer<String, PrivilegesActions> */), APPLICATIONS);
  }

}
