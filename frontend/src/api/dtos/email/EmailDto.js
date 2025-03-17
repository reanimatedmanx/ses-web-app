export class EmailDto {
	/**
	 *
	 * @param {string | null} id
	 * @param {string | null} to
	 * @param {string | null} cc
	 * @param {string | null} bcc
	 * @param {string | null} subject
	 * @param {string | null} body
	 * @param {string | null} created_at
	 * @param {string | null} updated_at
	 */
	constructor(
		id = null,
		to = null,
		cc = null,
		bcc = null,
		subject = null,
		body = null,
		created_at = null,
		updated_at = null,
	) {
		this.id = id
		this.to = to
		this.cc = cc
		this.bcc = bcc
		this.subject = subject
		this.body = body
		this.created_at = created_at
		this.updated_at = updated_at
	}
}
