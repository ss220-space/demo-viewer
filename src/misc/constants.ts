export const LONG_GLIDE = 1;
export const RESET_COLOR = 2;
export const RESET_ALPHA = 4;
export const RESET_TRANSFORM = 8;
export const NO_CLIENT_COLOR = 16;
export const KEEP_TOGETHER = 32;
export const KEEP_APART = 64;
export const PLANE_MASTER = 128;
export const TILE_BOUND = 256;
export const PIXEL_SCALE = 512;
export const PASS_MOUSE = 1024;

export const BLIND = 1;
export const SEE_MOBS = 4;
export const SEE_OBJS = 8;
export const SEE_TURFS = 16;
export const SEE_SELF = 32;
export const SEE_INFRA = 64;
export const SEE_PIXELS = 256;
export const SEE_THRU = 512;
export const SEE_BLACKNESS = 1024;

export const VIS_INHERIT_ICON = 1;
export const VIS_INHERIT_ICON_STATE = 2;
export const VIS_INHERIT_DIR = 4;
export const VIS_INHERIT_LAYER = 8;
export const VIS_INHERIT_PLANE = 16;
export const VIS_INHERIT_ID = 32;
export const VIS_UNDERLAY = 64;
export const VIS_HIDE = 128;

export const SOUND_MUTE = 1;
export const SOUND_PAUSED = 2;
export const SOUND_STREAM = 4;
export const SOUND_UPDATE = 16;

export const MAX_LAYER : number = 32;

export const enum AppearanceAttributeIndex{
    TRANSFORMATION_MATRIX_3x3_A,
    TRANSFORMATION_MATRIX_3x3_B,
    TRANSFORMATION_MATRIX_3x3_C,
    TRANSFORMATION_MATRIX_3x3_D,
    TRANSFORMATION_MATRIX_3x3_E,
	TRANSFORMATION_MATRIX_3x3_F,
	
	ICON_BOUND_X_1,
	ICON_BOUND_Y_1,
	ICON_BOUND_X_2,
	ICON_BOUND_Y_2,
	
    ICON_LAYER,
    //ICON_PLANE,
	
	COLOR_MATRIX_RED,
	COLOR_MATRIX_RED_GREEN,
	COLOR_MATRIX_RED_BLUE,
	COLOR_MATRIX_RED_ALPHA,

	COLOR_MATRIX_GREEN_RED,
	COLOR_MATRIX_GREEN,
	COLOR_MATRIX_GREEN_BLUE,
	COLOR_MATRIX_GREEN_ALPHA,

	COLOR_MATRIX_BLUE_RED,
	COLOR_MATRIX_BLUE_GREEN,
	COLOR_MATRIX_BLUE,
	COLOR_MATRIX_BLUE_ALPHA,

	COLOR_MATRIX_ALPHA_RED,
	COLOR_MATRIX_ALPHA_GREEN,
	COLOR_MATRIX_ALPHA_BLUE,
	COLOR_MATRIX_ALPHA_ALPHA,

	COLOR_MATRIX_COMPONENT_RED,
	COLOR_MATRIX_COMPONENT_GREEN,
	COLOR_MATRIX_COMPONENT_BLUE,
	COLOR_MATRIX_COMPONENT_ALPHA,

    COLOR_RGBA_RED = 11,
    COLOR_RGBA_GREEN,
    COLOR_RGBA_BLUE,
    COLOR_RGBA_ALPHA,
}

///All relevant planes used by Yogstation categorized into an enum of their values
export const enum Planes{
  LOWEST_EVER_PLANE = -50,

	CLICKCATCHER_PLANE = -30,

	PLANE_SPACE = -25,
	PLANE_SPACE_PARALLAX = -20,

	RENDER_PLANE_TRANSPARENT = -11, //Transparent plane that shows openspace underneath the floor

	FLOOR_PLANE = -10,

	WALL_PLANE = -9,
	GAME_PLANE = -8,

	ABOVE_GAME_PLANE = -2,

	RENDER_PLANE_GAME_WORLD = -1,

	DEFAULT_PLANE = 0, //Marks out the default plane, even if we don't use it

	AREA_PLANE = 2,
	MASSIVE_OBJ_PLANE = 3,
	GHOST_PLANE = 4,
	POINT_PLANE = 5,

//---------- LIGHTING -------------
///Normal 1 per turf dynamic lighting underlays
	LIGHTING_PLANE = 10,

///Lighting objects that are "free floating"
	O_LIGHTING_VISUAL_PLANE = 11,

///Used in camerachunks to keep some turfs hidden on photo
	BYOND_LIGHTING_PLANE = 19,

/// This plane masks out lighting to create an "emissive" effect, ie for glowing lights in otherwise dark areas.
	EMISSIVE_PLANE = 14,

/// Masks the emissive plane
	EMISSIVE_MASK_PLANE = 15,

	RENDER_PLANE_LIGHTING = 16,

///Things that should render ignoring lighting
	ABOVE_LIGHTING_PLANE = 17,

//---------------- MISC -----------------------

///Pipecrawling images
	PIPECRAWL_IMAGES_PLANE = 20,

///AI Camera Static
	CAMERA_STATIC_PLANE = 21,

///Anything that wants to be part of the game plane, but also wants to draw above literally everything else
	HIGH_GAME_PLANE = 22,

	FULLSCREEN_PLANE = 23,

//--------------- FULLSCREEN RUNECHAT BUBBLES ------------

///Popup Chat Messages
	RUNECHAT_PLANE = 30,
/// Plane for balloon text (text that fades up)
	BALLOON_CHAT_PLANE = 31,

//-------------------- HUD ---------------------
//HUD layer defines
	HUD_PLANE = 40,
	ABOVE_HUD_PLANE = 41,

///Plane of the "splash" icon used that shows on the lobby screen. only render plate planes should be above this
	SPLASHSCREEN_PLANE = 50,

/// Buildmode HUD that in top-left corner
	HUD_PLANE_BUILDMODE = 40,

/// Debug View. This should always be on top. No exceptions.
	HUD_PLANE_DEBUGVIEW = 50,

	OPENSPACE_LAYER = 100, //Openspace layer over all
//-------------------- Rendering ---------------------
	RENDER_PLANE_GAME = 100,
	RENDER_PLANE_NON_GAME = 101,
	RENDER_PLANE_MASTER = 102,

  HIGHEST_EVER_PLANE = RENDER_PLANE_MASTER,

	EMISSIVE_Z_BELOW_LAYER = 1,
	EMISSIVE_FLOOR_LAYER = 2,
	EMISSIVE_SPACE_LAYER = 3,
	EMISSIVE_WALL_LAYER = 4,
}

export const enum SeeInvisibility{
    SEE_INVISIBLE_MINIMUM = 5,
    SEE_INVISIBLE_LIVING = 25,
    SEE_INVISIBLE_OBSERVER = 60,
    INVISIBILITY_MAXIMUM = 100,
    INVISIBILITY_ABSTRACT = 101,
}

export const enum BlendMode {
	/**
	 * Also called BLEND_OVERLAY by Byond
	 */
	DEFAULT = 1,
	ADD,
	SUBTRACT,
	MULTIPLY,
	INSET_OVERLAY,
	ALPHA,
	ALPHA_INVERTED,
}

export const enum RenderPlates{
	CANVAS,
	GAME_PLATE,
	UNMASKED_GAME_PLATE,
	MASKED_GAME_PLATE,
	TRANSPARENT_PLATE,
	GAME_WORLD_PLATE,
	LIGHTING_PLATE,
	EMISSIVE_SLATE,
	LIGHT_MASK_PLATE,
	NON_GAME_PLATE,
}