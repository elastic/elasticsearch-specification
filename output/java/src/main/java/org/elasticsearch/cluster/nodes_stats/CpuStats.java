
package org.elasticsearch.cluster.nodes_stats;

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

public class CpuStats  implements XContentable<CpuStats> {
  
  static final ParseField PERCENT = new ParseField("percent");
  private int _percent;
  private boolean _percent$isSet;
  public int getPercent() { return this._percent; }
  public CpuStats setPercent(int val) {
    this._percent = val;
    _percent$isSet = true;
    return this;
  }

  static final ParseField SYS = new ParseField("sys");
  private String _sys;
  public String getSys() { return this._sys; }
  public CpuStats setSys(String val) { this._sys = val; return this; }

  static final ParseField SYS_IN_MILLIS = new ParseField("sys_in_millis");
  private long _sysInMillis;
  private boolean _sysInMillis$isSet;
  public long getSysInMillis() { return this._sysInMillis; }
  public CpuStats setSysInMillis(long val) {
    this._sysInMillis = val;
    _sysInMillis$isSet = true;
    return this;
  }

  static final ParseField TOTAL = new ParseField("total");
  private String _total;
  public String getTotal() { return this._total; }
  public CpuStats setTotal(String val) { this._total = val; return this; }

  static final ParseField TOTAL_IN_MILLIS = new ParseField("total_in_millis");
  private long _totalInMillis;
  private boolean _totalInMillis$isSet;
  public long getTotalInMillis() { return this._totalInMillis; }
  public CpuStats setTotalInMillis(long val) {
    this._totalInMillis = val;
    _totalInMillis$isSet = true;
    return this;
  }

  static final ParseField USER = new ParseField("user");
  private String _user;
  public String getUser() { return this._user; }
  public CpuStats setUser(String val) { this._user = val; return this; }

  static final ParseField USER_IN_MILLIS = new ParseField("user_in_millis");
  private long _userInMillis;
  private boolean _userInMillis$isSet;
  public long getUserInMillis() { return this._userInMillis; }
  public CpuStats setUserInMillis(long val) {
    this._userInMillis = val;
    _userInMillis$isSet = true;
    return this;
  }


  
  @Override
  public void toXContentInternal(XContentBuilder builder, ToXContent.Params params) throws IOException {
    
    if (_percent$isSet) {
      builder.field(PERCENT.getPreferredName(), _percent);
    }
    if (_sys != null) {
      builder.field(SYS.getPreferredName(), _sys);
    }
    if (_sysInMillis$isSet) {
      builder.field(SYS_IN_MILLIS.getPreferredName(), _sysInMillis);
    }
    if (_total != null) {
      builder.field(TOTAL.getPreferredName(), _total);
    }
    if (_totalInMillis$isSet) {
      builder.field(TOTAL_IN_MILLIS.getPreferredName(), _totalInMillis);
    }
    if (_user != null) {
      builder.field(USER.getPreferredName(), _user);
    }
    if (_userInMillis$isSet) {
      builder.field(USER_IN_MILLIS.getPreferredName(), _userInMillis);
    }
  }

  @Override
  public CpuStats fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return CpuStats.PARSER.apply(parser, null);
  }

  public static final ObjectParser<CpuStats, Void> PARSER =
    new ObjectParser<>(CpuStats.class.getName(), false, CpuStats::new);

  static {
    PARSER.declareInt(CpuStats::setPercent, PERCENT);
    PARSER.declareString(CpuStats::setSys, SYS);
    PARSER.declareLong(CpuStats::setSysInMillis, SYS_IN_MILLIS);
    PARSER.declareString(CpuStats::setTotal, TOTAL);
    PARSER.declareLong(CpuStats::setTotalInMillis, TOTAL_IN_MILLIS);
    PARSER.declareString(CpuStats::setUser, USER);
    PARSER.declareLong(CpuStats::setUserInMillis, USER_IN_MILLIS);
  }

}
