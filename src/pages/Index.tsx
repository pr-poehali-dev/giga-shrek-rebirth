import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">$GIGASHREK</div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Главная</a>
            <a href="#history" className="hover:text-cyan-400 transition-colors">История</a>
            <a href="#problem" className="hover:text-cyan-400 transition-colors">Проблема</a>
            <a href="#rebirth" className="hover:text-cyan-400 transition-colors">Возрождение</a>
            <a href="#tokenomics" className="hover:text-cyan-400 transition-colors">Токеномика</a>
            <a href="#chart" className="hover:text-cyan-400 transition-colors">График</a>
          </div>
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
            onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
          >
            Buy $GIGASHREK
          </Button>
        </div>
      </nav>

      {/* Hero Section - Восход */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/d096ada9-c006-4302-8f4b-2a500fcb385d.png')`,
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
              Восстание из пепла. Возрождение легенды. Будущее мем-коинов на Solana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-lg px-8 py-4"
                onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
              >
                <Icon name="Rocket" className="mr-2" />
                Купить на Pump.fun
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

      {/* History Section - Рождение токена */}
      <section id="history" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                CHAPTER 1: НАЧАЛО
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
                Рождение Легенды
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                В далёком 2023 году, в глубинах цифрового болота, родился проект, который должен был изменить мир мем-коинов навсегда.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Запуск на Solana blockchain</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Сообщество из 10,000+ холдеров</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-400" />
                  <span>Революционная токеномика</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/f86bea0d-a7e2-4f16-92af-29a68eea2ee6.png" 
                  alt="GiGAShrek Business Success" 
                  className="rounded-xl shadow-2xl border border-green-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Взлом */}
      <section id="problem" className="py-20 bg-gradient-to-r from-red-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/28f64367-f30e-4dcc-9eb0-16855f5d4a51.png" 
                  alt="GiGAShrek Professional" 
                  className="rounded-xl shadow-2xl border border-red-500/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 to-transparent rounded-xl"></div>
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-red-500/20 text-red-400 border-red-500/30">
                CHAPTER 2: ПАДЕНИЕ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                Час Испытаний
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Но даже самые смелые мечты могут столкнуться с реальностью. Атака хакеров поставила проект на грань исчезновения.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" className="text-red-400" />
                  <span>Взлом смарт-контракта</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" className="text-red-400" />
                  <span>Потеря 60% ликвидности</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertTriangle" className="text-red-400" />
                  <span>Временная остановка торгов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebirth Section - Возрождение */}
      <section id="rebirth" className="py-20 bg-gradient-to-r from-cyan-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            CHAPTER 3: ВОЗРОЖДЕНИЕ
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            GiGAShrekCoin V2
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Из пепла поражения восстаёт новая эра. Сильнее, безопаснее, готовая к покорению вершин.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="Shield" className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Безопасность</h3>
                <p className="text-gray-300">Аудированный код, мульти-сиг кошелёк</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-400 mb-2">Сообщество</h3>
                <p className="text-gray-300">25,000+ участников и растём</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Icon name="TrendingUp" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-400 mb-2">Рост</h3>
                <p className="text-gray-300">Новая токеномика для роста</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">Токеномика V2</h2>
            <p className="text-xl text-gray-300">Прозрачная и справедливая экономика токена</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">1B</h3>
                <p className="text-gray-300">Общий объём</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-green-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-2">60%</h3>
                <p className="text-gray-300">Ликвидность</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">25%</h3>
                <p className="text-gray-300">Маркетинг</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">15%</h3>
                <p className="text-gray-300">Команда</p>
              </CardContent>
            </Card>
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

      {/* Chart Section - Live График */}
      <section id="chart" className="py-20 bg-gradient-to-r from-gray-900/50 to-black relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              LIVE ДАННЫЕ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
              График Торгов
            </h2>
            <p className="text-xl text-gray-300">
              Следи за движением цены $GIGASHREK в реальном времени
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Live Stats */}
            <Card className="bg-gradient-to-br from-green-900/30 to-gray-900 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="TrendingUp" className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-green-400 mb-2">Цена</h3>
                <p className="text-2xl font-bold text-white">$0.000156</p>
                <p className="text-green-400 text-sm">+12.5% (24h)</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-900/30 to-gray-900 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="BarChart3" className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-blue-400 mb-2">Объём (24h)</h3>
                <p className="text-2xl font-bold text-white">$2.1M</p>
                <p className="text-blue-400 text-sm">+45.2%</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-900/30 to-gray-900 border-purple-500/30">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-purple-400 mb-2">Холдеры</h3>
                <p className="text-2xl font-bold text-white">3,247</p>
                <p className="text-purple-400 text-sm">+156 (24h)</p>
              </CardContent>
            </Card>
          </div>

          {/* Chart Widget */}
          <Card className="bg-gray-900/50 border-cyan-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-cyan-400">$GIGASHREK / SOL</h3>
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                    onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
                  >
                    <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                    Открыть на Pump.fun
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
                      $0.000120
                    </div>
                    <div className="absolute top-2 right-4 text-xs text-green-400 font-bold">
                      $0.000156 ↗
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
                  Купить $GIGASHREK
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-3"
                  onClick={() => window.open('https://pump.fun/coin/5r38iFXBj7NCVGbJbscese3PUBK2Ke6PtNJ3FSK8pump', '_blank')}
                >
                  <Icon name="BarChart" className="mr-2" />
                  Подробная аналитика
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-400">Присоединяйся к Армии</h2>
          <p className="text-xl text-gray-300 mb-12">Стань частью сообщества, которое меняет будущее мем-коинов</p>
          
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-4">$GIGASHREK</div>
          <p className="text-gray-400 mb-6">Не финансовый совет. Инвестируйте ответственно.</p>
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