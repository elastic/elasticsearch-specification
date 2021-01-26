class DateIndexNameProcessor extends ProcessorBase {
  date_formats: string[]
  date_rounding: DateRounding
  field: Field
  index_name_format: string
  index_name_prefix: string
  locale: string
  timezone: string
}
