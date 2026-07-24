// Single source of truth for studio identity, used across pages and legal copy.
// When the Apple developer account moves to an organization ("Frozen Grape"),
// update APP_STORE_SELLER (and LEGAL_ENTITY once the company is formed) here —
// every page reads from these constants.

export const STUDIO_NAME = "Frozen Grape";
export const STUDIO_NAME_LONG = "Frozen Grape Studios";

/**
 * The entity named in legal documents ("we", "us").
 * EDITABLE — once a company is formed, set to its exact legal name
 * (e.g. "Frozen Grape LLC").
 */
export const LEGAL_ENTITY = "Frozen Grape";

/**
 * The seller name currently shown on the App Store.
 * EDITABLE — flip to the organization name after the Apple developer
 * account conversion/transfer completes.
 */
export const APP_STORE_SELLER = "Ryan Bergeron";

export const SUPPORT_EMAIL = "support@frozengrape.app";
export const SITE_URL = "https://frozengrape.app";

/** Where the studio operates from; used for governing-law clauses. */
export const STUDIO_LOCATION = "Texas, United States";
export const GOVERNING_LAW_STATE = "Texas";
