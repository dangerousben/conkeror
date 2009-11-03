/**
 * (C) Copyright 2009 John J. Foerch
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

require("bindings/default/content-buffer/form.js");

/* Keymap for form buttons */
define_keymap("content_buffer_button_keymap");

define_key(content_buffer_button_keymap, "space", "follow",
           $browser_object = browser_object_focused_element);
define_key(content_buffer_button_keymap, "return", "follow",
           $browser_object = browser_object_focused_element);
