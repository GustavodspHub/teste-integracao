import app from './config/app'
import { SERVER } from '../utils/constants'

app.listen(SERVER.PORT, () => console.log(`Server running at http://localhost:${SERVER.PORT}`))
