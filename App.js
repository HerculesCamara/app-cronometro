const { Component } = require("react");
const { View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity } = require("react-native");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    }

    //Variavel do timer do relogio
    this.timer = null;

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this)
  }

  vai() {
    if (this.timer !== null) {
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'VAI'})
    } else {
      this.timer = setInterval(() => {
          this.setState({numero: this.state.numero + 0.1})
        }, 100)

        this.setState({botao: 'PARAR'})
    }
  }

  limpar() {
    clearInterval(this.timer)
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'VAI',
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')} 
          style={styles.cronometro}
        />
  
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>
  
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.AreaUltimo}>
          <Text style={styles.ultimo}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's': ''}
          </Text>
        </View>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  AreaUltimo: {
    marginTop: 40,
  },
  ultimo: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});

export default App;