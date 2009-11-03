/**
 * (C) Copyright 2007-2009 John J. Foerch
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

require("bindings/default/content-buffer/normal.js");

define_keymap("content_buffer_form_keymap");

define_key(content_buffer_form_keymap, "return", null, $fallthrough);
define_key(content_buffer_form_keymap, "C-c C-c", "submit-form");

