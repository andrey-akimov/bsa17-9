1 . Модифицировать существующее домашнее задание так, чтобы не использовать атрибуты для передачи информации в дочерние компоненты (переменные/функции), a использовать:




function mapDispatchToProps(dispatch, ownProps) {
    ...
}

function mapStateToProps(state) {
    ...
}

const ComponentConnected = connect(mapStateToProps, mapDispatchToProps)(Component);




в компонентах, которые и инициируют данные actions, что в итоге позволит иметь необходимые переменные и методы в this.props компонента.


******************

провайдер передает store дочерним компонентам, а чтобы он стал доступен в них, функция connect добавляет его в props


