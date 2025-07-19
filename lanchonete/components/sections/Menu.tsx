'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus, Star } from 'lucide-react';

export default function Menu() {
  console.log("Menu component rendered");

  const menuCategories = [
    {
      id: 'burgers',
      name: 'Smash Burgers',
      color: 'from-brand-red to-brand-pink',
      items: [
        {
          name: 'Classic Smash',
          description: 'Hambúrguer clássico com queijo, alface, tomate e molho especial',
          price: 'R$ 18,90',
          image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: true
        },
        {
          name: 'Double Smash',
          description: '2 carnes smash, queijo duplo, bacon e cebola caramelizada',
          price: 'R$ 24,90',
          image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        },
        {
          name: 'BBQ Smash',
          description: 'Carne smash, queijo, bacon, onion rings e molho BBQ',
          price: 'R$ 22,90',
          image: 'https://images.pexels.com/photos/33068080/pexels-photo-33068080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: true
        }
      ]
    },
    {
      id: 'sides',
      name: 'Acompanhamentos',
      color: 'from-brand-yellow to-brand-green',
      items: [
        {
          name: 'Batata Frita',
          description: 'Batatas douradas crocantes por fora, macias por dentro',
          price: 'R$ 8,90',
          image: 'https://images.pexels.com/photos/32986485/pexels-photo-32986485.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: true
        },
        {
          name: 'Batata com Queijo',
          description: 'Batatas fritas cobertas com queijo derretido e bacon',
          price: 'R$ 12,90',
          image: 'https://images.pexels.com/photos/29285466/pexels-photo-29285466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        },
        {
          name: 'Onion Rings',
          description: 'Anéis de cebola empanados e fritos até ficarem dourados',
          price: 'R$ 10,90',
          image: 'https://images.pexels.com/photos/31701975/pexels-photo-31701975.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Bebidas',
      color: 'from-brand-blue to-brand-pink',
      items: [
        {
          name: 'Milkshake Morango',
          description: 'Cremoso milkshake de morango com chantilly e calda',
          price: 'R$ 14,90',
          image: 'https://images.pexels.com/photos/2424832/pexels-photo-2424832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: true
        },
        {
          name: 'Milkshake Chocolate',
          description: 'Milkshake cremoso de chocolate com pedaços de brownie',
          price: 'R$ 16,90',
          image: 'https://images.pexels.com/photos/6545618/pexels-photo-6545618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        },
        {
          name: 'Refrigerante',
          description: 'Coca-Cola, Guaraná, Sprite ou Fanta - lata 350ml',
          price: 'R$ 6,90',
          image: 'https://images.pexels.com/photos/33068080/pexels-photo-33068080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Sobremesas',
      color: 'from-brand-pink to-brand-yellow',
      items: [
        {
          name: 'Brownie com Sorvete',
          description: 'Brownie quentinho com sorvete de baunilha e calda de chocolate',
          price: 'R$ 13,90',
          image: 'https://images.pexels.com/photos/2955818/pexels-photo-2955818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: true
        },
        {
          name: 'Cupcake Gourmet',
          description: 'Cupcake de chocolate com cobertura cremosa e frutas vermelhas',
          price: 'R$ 9,90',
          image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        },
        {
          name: 'Doce da Casa',
          description: 'Sobremesa especial com camadas de chocolate e creme',
          price: 'R$ 11,90',
          image: 'https://images.pexels.com/photos/7190369/pexels-photo-7190369.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
          popular: false
        }
      ]
    }
  ];

  return (
    <section id="cardapio" className="py-20 bg-gradient-to-br from-gray-50 to-white" data-konbinicode="menu-section">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="menu-header"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-black mb-6" data-konbinicode="menu-title">
            Nosso Saboroso
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
              Menu
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto" data-konbinicode="menu-subtitle">
            Cada item do nosso cardápio é preparado com ingredientes selecionados 
            e muito carinho para proporcionar a melhor experiência gastronômica
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-20" data-konbinicode="menu-categories">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              data-konbinicode={`menu-category-${category.id}`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full font-bold text-lg mb-4`}>
                  {category.name}
                </div>
              </div>

              {/* Category Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    whileHover={{ scale: 1.02 }}
                    data-konbinicode={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {/* Item Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        data-konbinicode={`menu-item-image-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      />
                      {item.popular && (
                        <div className="absolute top-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="mr-1 fill-current" size={14} />
                          Popular
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-black px-3 py-1 rounded-full font-bold">
                        {item.price}
                      </div>
                    </div>

                    {/* Item Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-brand-black mb-3" data-konbinicode={`menu-item-name-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed" data-konbinicode={`menu-item-description-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        {item.description}
                      </p>
                      <Button 
                        className="w-full bg-gradient-to-r from-brand-yellow to-brand-red hover:from-brand-red hover:to-brand-yellow text-brand-black font-bold transition-all duration-300"
                        onClick={() => console.log(`Adicionado ao carrinho: ${item.name}`)}
                      >
                        <Plus className="mr-2" size={18} />
                        Adicionar
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Menu CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-konbinicode="menu-cta"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-brand-red to-brand-pink hover:from-brand-pink hover:to-brand-red text-white font-bold px-12 py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl"
            onClick={() => console.log("Redirecionando para pedido completo")}
          >
            Ver Cardápio Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}