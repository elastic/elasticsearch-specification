
package org.elasticsearch.x_pack.watcher.schedule;

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
import org.elasticsearch.x_pack.watcher.schedule.*;

public class ScheduleContainer  implements XContentable<ScheduleContainer> {
  
  static final ParseField CRON = new ParseField("cron");
  private CronExpression _cron;
  public CronExpression getCron() { return this._cron; }
  public ScheduleContainer setCron(CronExpression val) { this._cron = val; return this; }


  static final ParseField DAILY = new ParseField("daily");
  private DailySchedule _daily;
  public DailySchedule getDaily() { return this._daily; }
  public ScheduleContainer setDaily(DailySchedule val) { this._daily = val; return this; }


  static final ParseField HOURLY = new ParseField("hourly");
  private HourlySchedule _hourly;
  public HourlySchedule getHourly() { return this._hourly; }
  public ScheduleContainer setHourly(HourlySchedule val) { this._hourly = val; return this; }


  static final ParseField INTERVAL = new ParseField("interval");
  private Interval _interval;
  public Interval getInterval() { return this._interval; }
  public ScheduleContainer setInterval(Interval val) { this._interval = val; return this; }


  static final ParseField MONTHLY = new ParseField("monthly");
  private List<TimeOfMonth> _monthly;
  public List<TimeOfMonth> getMonthly() { return this._monthly; }
  public ScheduleContainer setMonthly(List<TimeOfMonth> val) { this._monthly = val; return this; }


  static final ParseField WEEKLY = new ParseField("weekly");
  private List<TimeOfWeek> _weekly;
  public List<TimeOfWeek> getWeekly() { return this._weekly; }
  public ScheduleContainer setWeekly(List<TimeOfWeek> val) { this._weekly = val; return this; }


  static final ParseField YEARLY = new ParseField("yearly");
  private List<TimeOfYear> _yearly;
  public List<TimeOfYear> getYearly() { return this._yearly; }
  public ScheduleContainer setYearly(List<TimeOfYear> val) { this._yearly = val; return this; }


  
  @Override
  public XContentBuilder toXContent(XContentBuilder builder, ToXContent.Params params) throws IOException {
    builder.startObject();
    if (_cron != null) {
      builder.field(CRON.getPreferredName());
      _cron.toXContent(builder, params);
    }
    if (_daily != null) {
      builder.field(DAILY.getPreferredName());
      _daily.toXContent(builder, params);
    }
    if (_hourly != null) {
      builder.field(HOURLY.getPreferredName());
      _hourly.toXContent(builder, params);
    }
    if (_interval != null) {
      builder.field(INTERVAL.getPreferredName());
      _interval.toXContent(builder, params);
    }
    if (_monthly != null) {
      builder.array(MONTHLY.getPreferredName(), _monthly);
    }
    if (_weekly != null) {
      builder.array(WEEKLY.getPreferredName(), _weekly);
    }
    if (_yearly != null) {
      builder.array(YEARLY.getPreferredName(), _yearly);
    }
    builder.endObject();
    return builder;
  }

  @Override
  public ScheduleContainer fromXContent(XContentParser parser) throws IOException, XContentParseException {
    return ScheduleContainer.PARSER.apply(parser, null);
  }

  public static final ObjectParser<ScheduleContainer, Void> PARSER =
    new ObjectParser<>(ScheduleContainer.class.getName(), false, ScheduleContainer::new);

  static {
    PARSER.declareObject(ScheduleContainer::setCron, (p, t) -> CronExpression.PARSER.apply(p, t), CRON);
    PARSER.declareObject(ScheduleContainer::setDaily, (p, t) -> DailySchedule.PARSER.apply(p, t), DAILY);
    PARSER.declareObject(ScheduleContainer::setHourly, (p, t) -> HourlySchedule.PARSER.apply(p, t), HOURLY);
    PARSER.declareObject(ScheduleContainer::setInterval, (p, t) -> Interval.PARSER.apply(p, t), INTERVAL);
    PARSER.declareObjectArray(ScheduleContainer::setMonthly, (p, t) -> TimeOfMonth.PARSER.apply(p, t), MONTHLY);
    PARSER.declareObjectArray(ScheduleContainer::setWeekly, (p, t) -> TimeOfWeek.PARSER.apply(p, t), WEEKLY);
    PARSER.declareObjectArray(ScheduleContainer::setYearly, (p, t) -> TimeOfYear.PARSER.apply(p, t), YEARLY);
  }

}
