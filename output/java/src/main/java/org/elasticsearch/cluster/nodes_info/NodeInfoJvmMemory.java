
package org.elasticsearch.cluster.nodes_info;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.HashMap;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import org.elasticsearch.*;
import org.elasticsearch.common.ParseField;
import org.elasticsearch.common.xcontent.*;
import org.elasticsearch.internal.*;

public class NodeInfoJvmMemory  implements XContentable<NodeInfoJvmMemory> {
  
  static final ParseField DIRECT_MAX = new ParseField("direct_max");
  private String _directMax;
  public String getDirectMax() { return this._directMax; }
  public NodeInfoJvmMemory setDirectMax(String val) { this._directMax = val; return this; }

  static final ParseField DIRECT_MAX_IN_BYTES = new ParseField("direct_max_in_bytes");
  private long _directMaxInBytes;
  private boolean _directMaxInBytes$isSet;
  public long getDirectMaxInBytes() { return this._directMaxInBytes; }
  public NodeInfoJvmMemory setDirectMaxInBytes(long val) {
    this._directMaxInBytes = val;
    _directMaxInBytes$isSet = true;
    return this;
  }

  static final ParseField HEAP_INIT = new ParseField("heap_init");
  private String _heapInit;
  public String getHeapInit() { return this._heapInit; }
  public NodeInfoJvmMemory setHeapInit(String val) { this._heapInit = val; return this; }

  static final ParseField HEAP_INIT_IN_BYTES = new ParseField("heap_init_in_bytes");
  private long _heapInitInBytes;
  private boolean _heapInitInBytes$isSet;
  public long getHeapInitInBytes() { return this._heapInitInBytes; }
  public NodeInfoJvmMemory setHeapInitInBytes(long val) {
    this._heapInitInBytes = val;
    _heapInitInBytes$isSet = true;
    return this;
  }

  static final ParseField HEAP_MAX = new ParseField("heap_max");
  private String _heapMax;
  public String getHeapMax() { return this._heapMax; }
  public NodeInfoJvmMemory setHeapMax(String val) { this._heapMax = val; return this; }

  static final ParseField HEAP_MAX_IN_BYTES = new ParseField("heap_max_in_bytes");
  private long _heapMaxInBytes;
  private boolean _heapMaxInBytes$isSet;
  public long getHeapMaxInBytes() { return this._heapMaxInBytes; }
  public NodeInfoJvmMemory setHeapMaxInBytes(long val) {
    this._heapMaxInBytes = val;
    _heapMaxInBytes$isSet = true;
    return this;
  }

  static final ParseField NON_HEAP_INIT = new ParseField("non_heap_init");
  private String _nonHeapInit;
  public String getNonHeapInit() { return this._nonHeapInit; }
  public NodeInfoJvmMemory setNonHeapInit(String val) { this._nonHeapInit = val; return this; }

  static final ParseField NON_HEAP_INIT_IN_BYTES = new ParseField("non_heap_init_in_bytes");
  private long _nonHeapInitInBytes;
  private boolean _nonHeapInitInBytes$isSet;
  public long getNonHeapInitInBytes() { return this._nonHeapInitInBytes; }
  public NodeInfoJvmMemory setNonHeapInitInBytes(long val) {
    this._nonHeapInitInBytes = val;
    _nonHeapInitInBytes$isSet = true;
    return this;
  }

  static final ParseField NON_HEAP_MAX = new ParseField("non_heap_max");
  private String _nonHeapMax;
  public String getNonHeapMax() { return this._nonHeapMax; }
  public NodeInfoJvmMemory setNonHeapMax(String val) { this._nonHeapMax = val; return this; }

  static final ParseField NON_HEAP_MAX_IN_BYTES = new ParseField("non_heap_max_in_bytes");
  private long _nonHeapMaxInBytes;
  private boolean _nonHeapMaxInBytes$isSet;
  public long getNonHeapMaxInBytes() { return this._nonHeapMaxInBytes; }
  public NodeInfoJvmMemory setNonHeapMaxInBytes(long val) {
    this._nonHeapMaxInBytes = val;
    _nonHeapMaxInBytes$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_directMax != null) {
      builder.field(DIRECT_MAX.getPreferredName(), _directMax);
    }
    if (_directMaxInBytes$isSet) {
      builder.field(DIRECT_MAX_IN_BYTES.getPreferredName(), _directMaxInBytes);
    }
    if (_heapInit != null) {
      builder.field(HEAP_INIT.getPreferredName(), _heapInit);
    }
    if (_heapInitInBytes$isSet) {
      builder.field(HEAP_INIT_IN_BYTES.getPreferredName(), _heapInitInBytes);
    }
    if (_heapMax != null) {
      builder.field(HEAP_MAX.getPreferredName(), _heapMax);
    }
    if (_heapMaxInBytes$isSet) {
      builder.field(HEAP_MAX_IN_BYTES.getPreferredName(), _heapMaxInBytes);
    }
    if (_nonHeapInit != null) {
      builder.field(NON_HEAP_INIT.getPreferredName(), _nonHeapInit);
    }
    if (_nonHeapInitInBytes$isSet) {
      builder.field(NON_HEAP_INIT_IN_BYTES.getPreferredName(), _nonHeapInitInBytes);
    }
    if (_nonHeapMax != null) {
      builder.field(NON_HEAP_MAX.getPreferredName(), _nonHeapMax);
    }
    if (_nonHeapMaxInBytes$isSet) {
      builder.field(NON_HEAP_MAX_IN_BYTES.getPreferredName(), _nonHeapMaxInBytes);
    }
  }

  @Override
  public NodeInfoJvmMemory fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return NodeInfoJvmMemory.PARSER.apply(parser, null);
  }

  public static final ObjectParser<NodeInfoJvmMemory, Void> PARSER =
    new ObjectParser<>(NodeInfoJvmMemory.class.getName(), false, NodeInfoJvmMemory::new);

  static {
    PARSER.declareString(NodeInfoJvmMemory::setDirectMax, DIRECT_MAX);
    PARSER.declareLong(NodeInfoJvmMemory::setDirectMaxInBytes, DIRECT_MAX_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setHeapInit, HEAP_INIT);
    PARSER.declareLong(NodeInfoJvmMemory::setHeapInitInBytes, HEAP_INIT_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setHeapMax, HEAP_MAX);
    PARSER.declareLong(NodeInfoJvmMemory::setHeapMaxInBytes, HEAP_MAX_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setNonHeapInit, NON_HEAP_INIT);
    PARSER.declareLong(NodeInfoJvmMemory::setNonHeapInitInBytes, NON_HEAP_INIT_IN_BYTES);
    PARSER.declareString(NodeInfoJvmMemory::setNonHeapMax, NON_HEAP_MAX);
    PARSER.declareLong(NodeInfoJvmMemory::setNonHeapMaxInBytes, NON_HEAP_MAX_IN_BYTES);
  }

}
