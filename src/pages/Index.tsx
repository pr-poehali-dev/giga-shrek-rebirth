import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [tokenData, setTokenData] = useState({
    price: 0.000156,
    change24h: 12.5,
    volume24h: 2100000,
    holders: 3247,
    marketCap: 156000
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTokenData(prev => ({
        ...prev,
        price: prev.price + (Math.random() - 0.5) * 0.000001,
        change24h: prev.change24h + (Math.random() - 0.5) * 0.1,
        volume24h: prev.volume24h + (Math.random() - 0.5) * 10000,
        holders: prev.holders + Math.floor(Math.random() * 3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">$GIGASHREK</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#history" className="hover:text-cyan-400 transition-colors">History</a>
            <a href="#problem" className="hover:text-cyan-400 transition-colors">The Fall</a>
            <a href="#rebirth" className="hover:text-cyan-400 transition-colors">Rebirth</a>
            <a href="#tokenomics" className="hover:text-cyan-400 transition-colors">Tokenomics</a>
            <a href="#chart" className="hover:text-cyan-400 transition-colors">Chart</a>
          </div>
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
          >
            Buy $GIGASHREK
          </Button>
        </div>
      </nav>

      {/* Hero Section - The Comeback Sunrise */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/img/6b7848bf-c833-4afd-a07c-14466cc2c599.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
              GIGASHREKCOIN
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rising from the ashes. The legend reborn. The future of meme coins on Solana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-lg px-8 py-4"
                onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
              >
                <Icon name="Rocket" className="mr-2" />
                Buy on Pump.fun
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-4">
                <Icon name="FileText" className="mr-2" />
                Whitepaper
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-700">
          <div className="w-6 h-6 bg-green-400 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* History Section - Birth of the Coin */}
      <section id="history" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                CHAPTER 1: THE BEGINNING
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
                Birth of a Legend
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                In the depths of the digital swamp, a project was born that would change the meme coin world forever.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Launched on Solana blockchain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Community of 10,000+ holders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Revolutionary tokenomics</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/img/28302c7f-76f5-4df9-8a84-7a4b63c50073.jpg" 
                  alt="Birth of the Coin - Anime Office Scene" 
                  className="rounded-xl shadow-2xl border border-green-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - The Hack */}
      <section id="problem" className="py-20 bg-gradient-to-r from-red-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="/img/a6f6c4a5-4e55-42de-ac65-b131b8ab13fb.jpg" 
                  alt="The Hack - Cyberpunk Breach Scene" 
                  className="rounded-xl shadow-2xl border border-red-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">
                CHAPTER 2: THE FALL
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                Hour of Trials
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Even the boldest dreams can face reality. Hacker attacks brought the project to the brink of extinction.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" className="text-red-400" />
                  <span>Smart contract exploited</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" className="text-red-400" />
                  <span>60% liquidity lost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" className="text-red-400" />
                  <span>Temporary trading halt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Isolation Section - Building Again */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="/img/93bc5be0-e58a-4af4-adfc-1f7f7a7c652f.jpg" 
                  alt="Isolation - Coding in the Cave" 
                  className="rounded-xl shadow-2xl border border-blue-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                CHAPTER 2.5: THE REBUILD
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
                Isolation & Determination
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                In the darkness of the swamp cave, working alone through endless nights. Fixing code, restoring trust, building the future.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Code" className="text-blue-400" />
                  <span>Smart contract rewritten from scratch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-blue-400" />
                  <span>Security audits completed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-blue-400" />
                  <span>6 months of development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebirth Section - The Comeback */}
      <section id="rebirth" className="py-20 bg-gradient-to-r from-cyan-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                CHAPTER 3: REBIRTH
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                GiGAShrekCoin V2
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                From the ashes of defeat rises a new era. Stronger, safer, ready to conquer new heights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Icon name="Shield" className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-cyan-400 mb-1">Security</h3>
                    <p className="text-gray-300 text-sm">Audited code</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Icon name="Users" className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-green-400 mb-1">Community</h3>
                    <p className="text-gray-300 text-sm">25,000+ members</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <Icon name="TrendingUp" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h3 className="text-lg font-bold text-blue-400 mb-1">Growth</h3>
                    <p className="text-gray-300 text-sm">New tokenomics</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/img/00053c35-ea76-407f-be20-95b1fb362fdf.jpg" 
                  alt="The Comeback - V2 Launch" 
                  className="rounded-xl shadow-2xl border border-cyan-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section - UI Dashboard */}
      <section id="tokenomics" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
              CHAPTER 4: TOKENOMICS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Financial Architecture</h2>
            <p className="text-xl text-gray-300">Transparent and fair token economy</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="relative">
                <img 
                  src="/img/e1e111dd-69d5-4507-b35b-be164701b07e.jpg" 
                  alt="Cyberpunk UI Dashboard" 
                  className="rounded-xl shadow-2xl border border-green-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">1B</h3>
                  <p className="text-gray-300">Total Supply</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">60%</h3>
                  <p className="text-gray-300">Liquidity</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">25%</h3>
                  <p className="text-gray-300">Marketing</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">15%</h3>
                  <p className="text-gray-300">Team</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solana Integration */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 px-6 py-3 rounded-full border border-purple-500/30">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold">Powered by Solana</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section - Digital Vault */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                CHAPTER 5: SECURITY
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
                Digital Fortress
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Advanced security protocols protect every transaction. Multi-layered defense systems guard the treasury.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-blue-400" />
                  <span>Multi-signature wallet security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Lock" className="text-blue-400" />
                  <span>Immutable smart contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Eye" className="text-blue-400" />
                  <span>Real-time monitoring systems</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/img/969a702c-09b6-4b10-9877-84742b829839.jpg" 
                  alt="Digital Security Vault" 
                  className="rounded-xl shadow-2xl border border-blue-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section - Vision Wall */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="/img/b9172a95-31e0-4fa2-b60f-e58e5b04ec03.jpg" 
                  alt="Holographic Roadmap Timeline" 
                  className="rounded-xl shadow-2xl border border-green-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                CHAPTER 6: THE FUTURE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
                Roadmap to Dominance
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Strategic milestones mapped for total market conquest. Each phase unlocks new possibilities.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-400">V1 Launch</h3>
                    <p className="text-gray-400 text-sm">Initial release & community building</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-400">V2 Relaunch</h3>
                    <p className="text-gray-400 text-sm">Enhanced security & features</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-400">DApp Platform</h3>
                    <p className="text-gray-400 text-sm">Decentralized applications ecosystem</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-400">NFT Collection</h3>
                    <p className="text-gray-400 text-sm">Unique digital art & utilities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-400">DAO Governance</h3>
                    <p className="text-gray-400 text-sm">Community-driven decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Section - Live Chart */}
      <section id="chart" className="py-20 bg-gradient-to-r from-gray-900/50 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              LIVE DATA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              Trading Chart
            </h2>
            <p className="text-xl text-gray-300">
              Track $GIGASHREK price movements in real-time
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Live Stats */}
            <Card className="bg-gradient-to-br from-green-900/30 to-gray-900 border-green-500/30">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">$G</span>
                </div>
                <h3 className="text-lg font-bold text-green-400 mb-2">Price</h3>
                <p className="text-2xl font-bold text-white">${tokenData.price.toFixed(6)}</p>
                <p className={`text-sm ${tokenData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tokenData.change24h >= 0 ? '+' : ''}{tokenData.change24h.toFixed(1)}% (24h)
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900/30 to-gray-900 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="BarChart3" className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-blue-400 mb-2">Volume (24h)</h3>
                <p className="text-2xl font-bold text-white">${(tokenData.volume24h / 1000000).toFixed(1)}M</p>
                <p className="text-blue-400 text-sm">+45.2%</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-purple-400 mb-2">Holders</h3>
                <p className="text-2xl font-bold text-white">{tokenData.holders.toLocaleString()}</p>
                <p className="text-purple-400 text-sm">+156 (24h)</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart Widget */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">$G</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">$GIGASHREK / SOL</h3>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
                  >
                    <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                    Open on Pump.fun
                  </Button>
                </div>
              </div>
              
              {/* Chart Container */}
              <div className="relative bg-black/30 rounded-lg p-4 border border-gray-700/50">
                <div className="h-96 flex items-center justify-center">
                  {/* Chart Placeholder with animated line */}
                  <div className="w-full h-full relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 800 300">
                      {/* Grid */}
                      <defs>
                        <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Animated Price Line */}
                      <path
                        d="M50,250 Q150,200 250,180 T450,160 T650,140 T750,120"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        className="animate-pulse"
                      />
                      
                      {/* Gradient Definition */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="50%" stopColor="#06B6D4" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      
                      {/* Data Points */}
                      <circle cx="250" cy="180" r="4" fill="#10B981" className="animate-bounce" />
                      <circle cx="450" cy="160" r="4" fill="#06B6D4" className="animate-bounce delay-100" />
                      <circle cx="650" cy="140" r="4" fill="#3B82F6" className="animate-bounce delay-200" />
                    </svg>
                    
                    {/* Chart Labels */}
                    <div className="absolute bottom-2 left-4 text-xs text-gray-400">
                      ${(tokenData.price * 0.8).toFixed(6)}
                    </div>
                    <div className="absolute top-2 right-4 text-xs text-green-400 font-bold">
                      ${tokenData.price.toFixed(6)} ↗
                    </div>
                  </div>
                </div>
                
                {/* Time Selector */}
                <div className="flex justify-center space-x-2 mt-4">
                  {['1H', '4H', '1D', '1W', '1M'].map((period) => (
                    <Button
                      key={period}
                      size="sm"
                      variant={period === '1D' ? 'default' : 'outline'}
                      className={period === '1D' 
                        ? 'bg-cyan-500 hover:bg-cyan-600' 
                        : 'border-gray-600 text-gray-400 hover:bg-gray-800'
                      }
                    >
                      {period}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Trading Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button 
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-lg py-3"
                  onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
                >
                  <Icon name="ArrowUp" className="mr-2" />
                  Buy $GIGASHREK
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-3"
                  onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
                >
                  <Icon name="BarChart" className="mr-2" />
                  Detailed Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section - Frog Army Plaza */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                CHAPTER 7: THE COMMUNITY
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">Join the Frog Army</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A vibrant community of holders, memers, and believers. Together we build the future of meme coins.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  onClick={() => window.open('https://t.me/GiGAShrekCoin', '_blank')}
                >
                  <Icon name="MessageSquare" className="mr-2" />
                  Telegram
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Icon name="Hash" className="mr-2" />
                  Discord
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                  <Icon name="Twitter" className="mr-2" />
                  Twitter
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">25K+</div>
                  <div className="text-gray-400 text-sm">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">50K+</div>
                  <div className="text-gray-400 text-sm">Memes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">100K+</div>
                  <div className="text-gray-400 text-sm">Transactions</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/img/19444ecc-470f-4b5f-a9d5-fa28e0eacdbf.jpg" 
                  alt="Community Festival Plaza" 
                  className="rounded-xl shadow-2xl border border-green-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memeverse Section - Meme Museum */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="/img/84baf0d1-bf20-4f62-b277-42c1e1a98849.jpg" 
                  alt="Memeverse Wall - Digital Museum" 
                  className="rounded-xl shadow-2xl border border-purple-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                CHAPTER 8: THE MEMEVERSE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
                Digital Culture Museum
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                A surreal gallery of internet culture, memes, and digital art. Where creativity meets cryptocurrency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Image" className="text-purple-400" />
                  <span>Curated meme collection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Sparkles" className="text-purple-400" />
                  <span>Animated digital art</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-purple-400" />
                  <span>Interactive experiences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-4">$GIGASHREK</div>
          <p className="text-gray-400 mb-6">Not financial advice. Invest responsibly.</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;