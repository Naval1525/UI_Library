"use client"
import React, { useState } from 'react';
import {
  // Navigation & UI
  Github, Sun, Moon, MessageCircle, Search, Home, Settings, User, Bell, Menu, X,
  Filter, MoreVertical, ChevronDown, ChevronRight, Check, Edit, Trash, Download,
  Upload, Share, ExternalLink, Link, ArrowUp, ArrowDown, ArrowLeft, ArrowRight,
  ChevronsUp, ChevronsDown, ChevronsLeft, ChevronsRight, RotateCcw, RotateCw,
  ZoomIn, ZoomOut, Maximize, Minimize, Plus, Minus, Eye, EyeOff,

  // Communication & Social
  Mail, Phone, Video, Send, Heart, ThumbsUp, ThumbsDown, Star, Flag, Alert, Info,
  MessageSquare, MessagesSquare, Share2, Forward, Reply, AtSign, Hash, Users,
  UserPlus, UserMinus, UserCheck, UserX, Group, Headphones,

  // Media & Entertainment
  Image as ImageIcon, Camera, Mic, Volume2, VolumeX, Play, Pause, SkipBack,
  SkipForward, Music, Film, Youtube, Twitter, Facebook, Instagram, Linkedin,
  Twitch, Discord, Radio, Tv, Monitor, Smartphone, Tablet, Speaker, Airplay,
  Cast, Music2, PlayCircle, PauseCircle, StopCircle, FastForward, Rewind,

  // Files & Documents
  File, FileText, FilePlus, FileCheck, Folder, FolderPlus, Save,
  Printer, Copy, Clipboard, ClipboardCheck, FileSearch, FileMinus, FileX,
  FolderMinus, FolderX, FolderSearch, Box, Archive, Package, Inbox,
  Cloud, CloudOff, Database, Server, HardDrive,

  // Weather & Nature
  Sun as SunIcon, Moon as MoonIcon, CloudRain, CloudSnow, Wind,
  Thermometer, Umbrella, Compass, Map, MapPin, Globe, CloudLightning,
  CloudDrizzle, Sunrise, Sunset, Rainbow, Droplets, Trees, Mountain, Waves,

  // Shopping & E-commerce
  ShoppingCart, CreditCard, DollarSign, Percent, Tag, Gift, Truck,
  ShoppingBag, Receipt, Wallet, Calculator, PiggyBank, Banknote, Coins,
  ShieldCheck, Lock, Unlock, QrCode, Barcode,

  // Health & Wellness
  Heart as HeartIcon, Activity, Pulse, Stethoscope,
  Thermometer as ThermometerHealth, Pills, Syringe, FirstAid, Hospital,
  Ambulance, Brain, Dna, Virus, Bacteria, Lungs, Bone, Eye as EyeHealth,

  // Tools & Development
  Code, Terminal, Git, Github as GithubIcon, Gitlab, Chrome, Firefox, Safari,
  Edge, Cpu, Memory, Wifi, WifiOff, Bluetooth, Battery, BatteryCharging,
  Plugin, Settings as SettingsIcon, Tool, Wrench, Hammer
} from 'lucide-react';

const IconLibrary = () => {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('interface');

  const categories = {
    interface: {
      title: 'Interface Icons',
      icons: [
        { icon: Home, name: 'Home' },
        { icon: Settings, name: 'Settings' },
        { icon: User, name: 'User' },
        { icon: Bell, name: 'Bell' },
        { icon: Search, name: 'Search' },
        { icon: Menu, name: 'Menu' },
        { icon: X, name: 'Close' },
        { icon: Filter, name: 'Filter' },
        { icon: MoreVertical, name: 'More' },
        { icon: ChevronDown, name: 'ChevronDown' },
        { icon: ChevronRight, name: 'ChevronRight' },
        { icon: Check, name: 'Check' },
        { icon: Edit, name: 'Edit' },
        { icon: Trash, name: 'Trash' },
        { icon: Download, name: 'Download' },
        { icon: Upload, name: 'Upload' },
        { icon: Share, name: 'Share' },
        { icon: ExternalLink, name: 'ExternalLink' },
        { icon: ArrowUp, name: 'ArrowUp' },
        { icon: ArrowDown, name: 'ArrowDown' },
        { icon: ArrowLeft, name: 'ArrowLeft' },
        { icon: ArrowRight, name: 'ArrowRight' },
        { icon: Plus, name: 'Plus' },
        { icon: Minus, name: 'Minus' },
        { icon: Eye, name: 'Eye' },
        { icon: EyeOff, name: 'EyeOff' }
      ]
    },
    communication: {
      title: 'Communication Icons',
      icons: [
        { icon: Mail, name: 'Mail' },
        { icon: MessageCircle, name: 'Message' },
        { icon: Phone, name: 'Phone' },
        { icon: Video, name: 'Video' },
        { icon: Send, name: 'Send' },
        { icon: Heart, name: 'Heart' },
        { icon: ThumbsUp, name: 'ThumbsUp' },
        { icon: ThumbsDown, name: 'ThumbsDown' },
        { icon: Star, name: 'Star' },
        { icon: Flag, name: 'Flag' },
        { icon: Alert, name: 'Alert' },
        { icon: Info, name: 'Info' },
        { icon: MessageSquare, name: 'MessageSquare' },
        { icon: MessagesSquare, name: 'MessagesSquare' },
        { icon: Share2, name: 'Share2' },
        { icon: Forward, name: 'Forward' },
        { icon: Reply, name: 'Reply' },
        { icon: AtSign, name: 'AtSign' },
        { icon: Hash, name: 'Hash' },
        { icon: Users, name: 'Users' }
      ]
    },
    media: {
      title: 'Media Icons',
      icons: [
        { icon: ImageIcon, name: 'Image' },
        { icon: Camera, name: 'Camera' },
        { icon: Mic, name: 'Mic' },
        { icon: Volume2, name: 'Volume' },
        { icon: VolumeX, name: 'Mute' },
        { icon: Play, name: 'Play' },
        { icon: Pause, name: 'Pause' },
        { icon: SkipBack, name: 'SkipBack' },
        { icon: Music, name: 'Music' },
        { icon: Film, name: 'Film' },
        { icon: Youtube, name: 'Youtube' },
        { icon: Twitter, name: 'Twitter' },
        { icon: Facebook, name: 'Facebook' },
        { icon: Instagram, name: 'Instagram' },
        { icon: Linkedin, name: 'Linkedin' },
        { icon: Twitch, name: 'Twitch' },
        { icon: Discord, name: 'Discord' },
        { icon: Radio, name: 'Radio' },
        { icon: Tv, name: 'TV' },
        { icon: Monitor, name: 'Monitor' }
      ]
    },
    files: {
      title: 'File Icons',
      icons: [
        { icon: File, name: 'File' },
        { icon: FileText, name: 'FileText' },
        { icon: FilePlus, name: 'FilePlus' },
        { icon: FileCheck, name: 'FileCheck' },
        { icon: Folder, name: 'Folder' },
        { icon: FolderPlus, name: 'FolderPlus' },
        { icon: Save, name: 'Save' },
        { icon: Copy, name: 'Copy' },
        { icon: FileSearch, name: 'FileSearch' },
        { icon: FileMinus, name: 'FileMinus' },
        { icon: FileX, name: 'FileX' },
        { icon: FolderMinus, name: 'FolderMinus' },
        { icon: FolderX, name: 'FolderX' },
        { icon: FolderSearch, name: 'FolderSearch' },
        { icon: Box, name: 'Box' },
        { icon: Archive, name: 'Archive' },
        { icon: Database, name: 'Database' },
        { icon: Server, name: 'Server' },
        { icon: HardDrive, name: 'HardDrive' },
        { icon: Cloud, name: 'Cloud' }
      ]
    },
    weather: {
      title: 'Weather Icons',
      icons: [
        { icon: SunIcon, name: 'Sun' },
        { icon: MoonIcon, name: 'Moon' },
        { icon: Cloud, name: 'Cloud' },
        { icon: CloudRain, name: 'CloudRain' },
        { icon: CloudSnow, name: 'CloudSnow' },
        { icon: Wind, name: 'Wind' },
        { icon: Thermometer, name: 'Thermometer' },
        { icon: Umbrella, name: 'Umbrella' },
        { icon: CloudLightning, name: 'CloudLightning' },
        { icon: CloudDrizzle, name: 'CloudDrizzle' },
        { icon: Sunrise, name: 'Sunrise' },
        { icon: Sunset, name: 'Sunset' },
        { icon: Rainbow, name: 'Rainbow' },
        { icon: Droplets, name: 'Droplets' },
        { icon: Trees, name: 'Trees' },
        { icon: Mountain, name: 'Mountain' },
        { icon: Waves, name: 'Waves' },
        { icon: Compass, name: 'Compass' },
        { icon: Map, name: 'Map' },
        { icon: Globe, name: 'Globe' }
      ]
    },
    shopping: {
      title: 'Shopping Icons',
      icons: [
        { icon: ShoppingCart, name: 'ShoppingCart' },
        { icon: CreditCard, name: 'CreditCard' },
        { icon: DollarSign, name: 'DollarSign' },
        { icon: Percent, name: 'Percent' },
        { icon: Tag, name: 'Tag' },
        { icon: Gift, name: 'Gift' },
        { icon: Package, name: 'Package' },
        { icon: Truck, name: 'Truck' },
        { icon: ShoppingBag, name: 'ShoppingBag' },
        { icon: Receipt, name: 'Receipt' },
        { icon: Wallet, name: 'Wallet' },
        { icon: Calculator, name: 'Calculator' },
        { icon: PiggyBank, name: 'PiggyBank' },
        { icon: Banknote, name: 'Banknote' },
        { icon: Coins, name: 'Coins' },
        { icon: ShieldCheck, name: 'ShieldCheck' },
        { icon: Lock, name: 'Lock' },
        { icon: Unlock, name: 'Unlock' },
        { icon: QrCode, name: 'QrCode' },
        { icon: Barcode, name: 'Barcode' }
      ]
    },
    health: {
      title: 'Health Icons',
      icons: [
        { icon: HeartIcon, name: 'Heart' },
        { icon: Activity, name: 'Activity' },
        { icon: Pulse, name: 'Pulse' },
        { icon: Stethoscope, name: 'Stethoscope' },
        { icon: ThermometerHealth, name: 'Thermometer' },
        { icon: Pills, name: 'Pills' },
        { icon: Syringe, name: 'Syringe' },
        { icon: FirstAid, name: 'FirstAid' },
        { icon: Hospital, name: 'Hospital' },
        { icon: Ambulance, name: 'Ambulance' },
        { icon: Brain, name: 'Brain' },
        { icon: Dna, name: 'DNA' },
        { icon: Virus, name: 'Virus' },
        { icon: Bacteria, name: 'Bacteria' },
        { icon: Lungs, name: 'Lungs' },
        { icon: Bone, name: 'Bone' },
        { icon: EyeHealth, name: 'Eye' }
      ]
    },
    development: {
      title: 'Development Icons',
      icons: [

        { icon: Code, name: 'Code' },
        { icon: Terminal, name: 'Terminal' },
        { icon: Git, name: 'Git' },
        { icon: GithubIcon, name: 'Github' },
        { icon: Gitlab, name: 'Gitlab' },
        { icon: Chrome, name: 'Chrome' },
        { icon: Firefox, name: 'Firefox' },
        { icon: Safari, name: 'Safari' },
        { icon: Edge, name: 'Edge' },
        { icon: Cpu, name: 'CPU' },
        { icon: Memory, name: 'Memory' },
        { icon: Wifi, name: 'Wifi' },
        { icon: WifiOff, name: 'WifiOff' },
        { icon: Bluetooth, name: 'Bluetooth' },
        { icon: Battery, name: 'Battery' },
        { icon: BatteryCharging, name: 'BatteryCharging' },
        { icon: Plugin, name: 'Plugin' },
        { icon: SettingsIcon, name: 'Settings' },
        { icon: Tool, name: 'Tool' },
        { icon: Wrench, name: 'Wrench' }
      ]
    }
  };

  // Filter icons based on search query
  const filteredIcons = Object.entries(categories).reduce((acc, [key, category]) => {
    const filteredCategory = {
      ...category,
      icons: category.icons.filter(icon =>
        icon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
    if (filteredCategory.icons.length > 0) {
      acc[key] = filteredCategory;
    }
    return acc;
  }, {});

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Header */}
      <header className={`py-4 sm:py-6 relative z-10 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" title="Home" className="flex items-center space-x-3">
                <span className={`text-4xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Icon<span className="text-fuchsia-500">Lib</span>
                </span>
              </a>
            </div>

            <div className="hidden md:flex ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12">
              {["Documentation", "Components", "Examples", "Support"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`text-lg font-normal ${
                    isDark
                      ? 'text-gray-300 hover:text-fuchsia-400'
                      : 'text-gray-600 hover:text-fuchsia-600'
                  } transition-all duration-200`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="relative hidden md:inline-flex items-center gap-4">
              <a
                href="https://discord.com"
                className={`p-2 ${
                  isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
                }`}
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://github.com"
                className={`p-2 ${
                  isDark ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Github size={24} />
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 ${
                  isDark ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                }`}
              >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className={`text-4xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Icon Library
          </h1>
          <div className="relative">
            <div className="absolute rounded-full -inset-px bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                <Search className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search icons..."
                className={`block w-full py-4 pr-6 pl-14 ${
                  isDark
                    ? 'bg-gray-800 text-white placeholder-gray-400'
                    : 'bg-white text-gray-900 placeholder-gray-500'
                } border border-transparent rounded-full focus:border-transparent focus:ring-2 focus:ring-fuchsia-500`}
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === key
                  ? 'bg-fuchsia-600 text-white'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {filteredIcons[selectedCategory]?.icons.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className={`p-4 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } rounded-lg ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              } transition-all duration-200 group cursor-pointer border ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon className={`w-6 h-6 group-hover:text-fuchsia-500 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`} />
                <span className={`text-sm ${
                  isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Usage Example Section */}
        <div className={`mt-12 p-6 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg border ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Usage Example
          </h2>
          <div className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'} p-4 rounded-md`}>
            <code className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <pre>{`import { IconName } from 'lucide-react';

// Use in your component
<IconName className="w-6 h-6" />`}</pre>
            </code>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IconLibrary;