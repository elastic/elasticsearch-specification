@rest_spec_name("ml.post_data")
@class_serializer("PostJobDataFormatter")
class PostJobDataRequest extends RequestBase {
  path_parts?: {
    job_id: string;
  }
  query_parameters?: {
    reset_end?: Date;
    reset_start?: Date;
  }
  body?: {
    data?: UserDefinedValue[];
  }
}
