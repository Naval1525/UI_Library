'use client'
import React, { useState } from 'react';
import {
  Truck,
  User,
  Settings,
  CreditCard,
  Package,
  MapPin,
  Bell,
  ShoppingCart
} from 'lucide-react';

const theme = {
  primary: '#2C2C2C',
  secondary: '#1E1E1E',
  background: '#121212',
  text: '#E0E0E0',
  accent: '#6A5ACD'
};

const Radiocom = () => {
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [username, setUsername] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [notifications, setNotifications] = useState(true);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center p-6"
      style={{
        backgroundColor: theme.background,
        backgroundImage: 'linear-gradient(to bottom right, rgba(18,18,18,0.9), rgba(18,18,18,0.95))'
      }}
    >
      <div className="container mx-auto max-w-5xl space-y-8">
        <header className="text-center mb-12">
          <h1
            className="text-4xl font-bold tracking-tight mb-4"
            style={{ color: theme.text }}
          >
            User Configuration Dashboard
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: theme.accent }}
          >
            Manage your shipping, profile, and account preferences in one comprehensive interface
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Delivery Options */}
          <div
            className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg"
            style={{ borderColor: theme.primary }}
          >
            <h2
              className="text-xl font-semibold mb-4 flex items-center"
              style={{ color: theme.text }}
            >
              <Truck className="mr-2" color={theme.accent} />
              Delivery Options
            </h2>
            <div className="space-y-4">
              <label
                className="flex items-center justify-between p-3 rounded-lg border"
                style={{
                  backgroundColor: selectedDelivery === 'standard' ? theme.secondary : theme.background,
                  borderColor: theme.primary,
                  color: theme.text
                }}
              >
                <div className="flex items-center">
                  <Package className="mr-2" color={theme.accent} />
                  <span>Standard Delivery</span>
                </div>
                <input
                  type="radio"
                  name="delivery"
                  checked={selectedDelivery === 'standard'}
                  onChange={() => setSelectedDelivery('standard')}
                  style={{ accentColor: theme.accent }}
                />
              </label>
              <label
                className="flex items-center justify-between p-3 rounded-lg border"
                style={{
                  backgroundColor: selectedDelivery === 'express' ? theme.secondary : theme.background,
                  borderColor: theme.primary,
                  color: theme.text
                }}
              >
                <div className="flex items-center">
                  <Truck className="mr-2" color={theme.accent} strokeWidth={2} />
                  <span>Express Delivery</span>
                </div>
                <input
                  type="radio"
                  name="delivery"
                  checked={selectedDelivery === 'express'}
                  onChange={() => setSelectedDelivery('express')}
                  style={{ accentColor: theme.accent }}
                />
              </label>
            </div>
          </div>

          {/* Profile Settings */}
          <div
            className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg"
            style={{ borderColor: theme.primary }}
          >
            <h2
              className="text-xl font-semibold mb-4 flex items-center"
              style={{ color: theme.text }}
            >
              <User className="mr-2" color={theme.accent} />
              Profile Settings
            </h2>
            <div className="space-y-4">
              <div
                className="flex items-center space-x-4 p-3 rounded-lg"
                style={{ backgroundColor: theme.secondary }}
              >
                <User color={theme.accent} />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-2 rounded"
                  style={{
                    backgroundColor: theme.background,
                    color: theme.text,
                    borderColor: theme.primary
                  }}
                />
              </div>
              <div
                className="flex items-center space-x-4 p-3 rounded-lg"
                style={{ backgroundColor: theme.secondary }}
              >
                <Settings color={theme.accent} />
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full p-2 rounded"
                  style={{
                    backgroundColor: theme.background,
                    color: theme.text,
                    borderColor: theme.primary
                  }}
                >
                  <option value="dark">Theme: Dark</option>
                  <option value="light">Theme: Light</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div
            className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg"
            style={{ borderColor: theme.primary }}
          >
            <h2
              className="text-xl font-semibold mb-4 flex items-center"
              style={{ color: theme.text }}
            >
              <CreditCard className="mr-2" color={theme.accent} />
              Payment Methods
            </h2>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: theme.secondary, color: theme.text }}
              >
                <span>Credit Card</span>
                <input type="checkbox" className="form-checkbox" />
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: theme.secondary, color: theme.text }}
              >
                <span>PayPal</span>
                <input type="checkbox" className="form-checkbox" />
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div
            className="bg-[#1A1A1A] rounded-lg p-6 shadow-lg"
            style={{ borderColor: theme.primary }}
          >
            <h2
              className="text-xl font-semibold mb-4 flex items-center"
              style={{ color: theme.text }}
            >
              <Bell className="mr-2" color={theme.accent} />
              Notification Preferences
            </h2>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between p-3 rounded-lg"
                style={{
                  backgroundColor: notifications ? theme.secondary : theme.background,
                  color: theme.text
                }}
              >
                <span>Enable Notifications</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={() => setNotifications(!notifications)}
                  />
                  <span
                    className="slider rounded"
                    style={{
                      backgroundColor: notifications ? theme.accent : theme.primary
                    }}
                  ></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radiocom;