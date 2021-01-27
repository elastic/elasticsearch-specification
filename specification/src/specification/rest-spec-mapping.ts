export type TypeName = string
export type RestSpecName = string
export class RestSpecMapping {
  constructor (public spec: RestSpecName, public request: TypeName, public response: TypeName) {}
}
