
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


public class NativeCodeInformation  implements XContentable<NativeCodeInformation> {
  
  static final ParseField BUILD_HASH = new ParseField("build_hash");
  private String _buildHash;
  public String getBuildHash() { return this._buildHash; }
  public NativeCodeInformation setBuildHash(String val) { this._buildHash = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public NativeCodeInformation setVersion(String val) { this._version = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_buildHash != null) {
      builder.field(BUILD_HASH.getPreferredName(), _buildHash);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public NativeCodeInformation fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NativeCodeInformation.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NativeCodeInformation, Void> PARSER =
    new ObjectParser<>(NativeCodeInformation.class.getName(), false, NativeCodeInformation::new);

  static {
    PARSER.declareString(NativeCodeInformation::setBuildHash, BUILD_HASH);
    PARSER.declareString(NativeCodeInformation::setVersion, VERSION);
  }

}
