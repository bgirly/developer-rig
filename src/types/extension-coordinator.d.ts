declare namespace ExtensionCoordinator {
  enum ExtensionAnchor {
    Hidden = 'hidden',
    Panel = 'panel',
    Overlay = 'video_overlay',
    Component = 'component',
  }

  enum ExtensionMode {
    Config = 'config',
    Dashboard = 'dashboard',
    Viewer = 'viewer',
  }

  enum ExtensionPlatform {
    Mobile = 'mobile',
    Web = 'web',
  }

  enum ExtensionState {
    Testing = 'Testing',
    HostedTest = 'Assets Uploaded',
    Approved = 'Approved',
    Released = 'Released',
    ReadyForReview = 'Ready For Review',
    InReview = 'In Review',
    PendingAction = 'Pending Action',
    Uploading = 'Uploading',
  }

  type ExtensionView = { viewerUrl: string; };
  type ExtensionViewWithPermissions = ExtensionView & { canLinkExternalContent: boolean; };
  type ComponentView = ExtensionViewWithPermissions & {
    aspectHeight: number;
    aspectWidth: number;
    zoom: boolean;
    zoomPixels: number;
  };
  type ConfigView = ExtensionViewWithPermissions;
  type HiddenView = ExtensionViewWithPermissions;
  type LiveConfigView = ExtensionViewWithPermissions;
  type MobileView = ExtensionView;
  type PanelView = ExtensionViewWithPermissions & { height: number; };
  type VideoOverlayView = ExtensionViewWithPermissions;

  interface ExtensionInstallationAbilities {
    isChatEnabled: boolean;
  }

  interface ExtensionViews {
    component?: ComponentView;
    config?: ConfigView;
    liveConfig?: LiveConfigView;
    mobile?: MobileView;
    panel?: PanelView;
    videoOverlay?: VideoOverlayView;
  }

  interface ExtensionObject {
    authorName: string;
    bitsEnabled: boolean;
    clientId: string;
    description: string;
    iconUrl: string;
    id: string;
    name: string;
    requestIdentityLink: boolean;
    sku: string;
    summary: string;
    token: string;
    version: string;
    views: ExtensionViews;
    vendorCode: string;
    state: ExtensionState;
    whitelistedConfigUrls: Array<string>;
    whitelistedPanelUrls: Array<string>;
  }

  interface ExtensionFrameParams {
    anchor: ExtensionAnchor;
    channelId: number;
    extension: ExtensionObject;
    features?: Partial<{
      bits: boolean,
    }>;
    iframeClassName: string;
    installationAbilities?: ExtensionInstallationAbilities;
    isPopout?: boolean;
    language?: string;
    locale?: string;
    loginId: number | null;
    mode: ExtensionMode;
    platform: ExtensionPlatform;
    trackingProperties: {};
  }

  interface ExtensionFrame {
    new(params: ExtensionFrameParams): ExtensionFrame;
  }

  interface ComponentViewSizeProps {
    aspectWidth?: number;
    aspectHeight?: number;
    zoom?: boolean;
    zoomPixels?: number;
  }

  interface ComponentSizingInfo {
    width: number;
    height: number;
    zoomScale: number;
  }

  interface Position {
    x: number;
    y: number;
  }

  function getComponentPositionFromView(playerWidth: number, playerHeight: number, configPosition: Position): Position;
  function getComponentSizeFromView(playerWidth: number, playerHeight: number, component: ComponentViewSizeProps): ComponentSizingInfo;
}
