
package org.elasticsearch.cluster.cluster_stats;

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

public class ClusterJvmVersion  implements XContentable<ClusterJvmVersion> {
  
  static final ParseField BUNDLED_JDK = new ParseField("bundled_jdk");
  private Boolean _bundledJdk;
  public Boolean getBundledJdk() { return this._bundledJdk; }
  public ClusterJvmVersion setBundledJdk(Boolean val) { this._bundledJdk = val; return this; }


  static final ParseField COUNT = new ParseField("count");
  private Integer _count;
  public Integer getCount() { return this._count; }
  public ClusterJvmVersion setCount(Integer val) { this._count = val; return this; }


  static final ParseField USING_BUNDLED_JDK = new ParseField("using_bundled_jdk");
  private Boolean _usingBundledJdk;
  public Boolean getUsingBundledJdk() { return this._usingBundledJdk; }
  public ClusterJvmVersion setUsingBundledJdk(Boolean val) { this._usingBundledJdk = val; return this; }


  static final ParseField VERSION = new ParseField("version");
  private String _version;
  public String getVersion() { return this._version; }
  public ClusterJvmVersion setVersion(String val) { this._version = val; return this; }


  static final ParseField VM_NAME = new ParseField("vm_name");
  private String _vmName;
  public String getVmName() { return this._vmName; }
  public ClusterJvmVersion setVmName(String val) { this._vmName = val; return this; }


  static final ParseField VM_VENDOR = new ParseField("vm_vendor");
  private String _vmVendor;
  public String getVmVendor() { return this._vmVendor; }
  public ClusterJvmVersion setVmVendor(String val) { this._vmVendor = val; return this; }


  static final ParseField VM_VERSION = new ParseField("vm_version");
  private String _vmVersion;
  public String getVmVersion() { return this._vmVersion; }
  public ClusterJvmVersion setVmVersion(String val) { this._vmVersion = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_bundledJdk != null) {
      builder.field(BUNDLED_JDK.getPreferredName(), _bundledJdk);
    }
    if (_count != null) {
      builder.field(COUNT.getPreferredName(), _count);
    }
    if (_usingBundledJdk != null) {
      builder.field(USING_BUNDLED_JDK.getPreferredName(), _usingBundledJdk);
    }
    if (_version != null) {
      builder.field(VERSION.getPreferredName(), _version);
    }
    if (_vmName != null) {
      builder.field(VM_NAME.getPreferredName(), _vmName);
    }
    if (_vmVendor != null) {
      builder.field(VM_VENDOR.getPreferredName(), _vmVendor);
    }
    if (_vmVersion != null) {
      builder.field(VM_VERSION.getPreferredName(), _vmVersion);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ClusterJvmVersion fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ClusterJvmVersion.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ClusterJvmVersion, Void> PARSER =
    new ObjectParser<>(ClusterJvmVersion.class.getName(), false, ClusterJvmVersion::new);

  static {
    PARSER.declareBoolean(ClusterJvmVersion::setBundledJdk, BUNDLED_JDK);
    PARSER.declareInt(ClusterJvmVersion::setCount, COUNT);
    PARSER.declareBoolean(ClusterJvmVersion::setUsingBundledJdk, USING_BUNDLED_JDK);
    PARSER.declareString(ClusterJvmVersion::setVersion, VERSION);
    PARSER.declareString(ClusterJvmVersion::setVmName, VM_NAME);
    PARSER.declareString(ClusterJvmVersion::setVmVendor, VM_VENDOR);
    PARSER.declareString(ClusterJvmVersion::setVmVersion, VM_VERSION);
  }

}
