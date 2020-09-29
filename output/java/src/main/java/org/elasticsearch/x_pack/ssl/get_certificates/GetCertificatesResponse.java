
package org.elasticsearch.x_pack.ssl.get_certificates;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.x_pack.ssl.get_certificates.*;
import org.elasticsearch.common_abstractions.response.*;

public class GetCertificatesResponse extends ResponseBase<GetCertificatesResponse> implements XContentable<GetCertificatesResponse> {
  
  static final ParseField CERTIFICATES = new ParseField("certificates");
  private List<ClusterCertificateInformation> _certificates;
  public List<ClusterCertificateInformation> getCertificates() { return this._certificates; }
  public GetCertificatesResponse setCertificates(List<ClusterCertificateInformation> val) { this._certificates = val; return this; }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    super.toXContentInternal(builder, params);
    if (_certificates != null) {
      builder.array(CERTIFICATES.getPreferredName(), _certificates);
    }
  }

  @Override
  public GetCertificatesResponse fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return GetCertificatesResponse.PARSER.apply(parser, null);
  }

  public static final ObjectParser<GetCertificatesResponse, Void> PARSER =
    new ObjectParser<>(GetCertificatesResponse.class.getName(), false, GetCertificatesResponse::new);

  static {
    PARSER.declareObjectArray(GetCertificatesResponse::setCertificates, (p, t) -> ClusterCertificateInformation.PARSER.apply(p, t), CERTIFICATES);
  }

}
